import { Component, OnInit } from '@angular/core';

enum GRID_TYPE {
  DOT = 'dot',
  FIXED_DOT = 'fixedDot',
  MESH = 'mesh',
  DOUBLE_MESH = 'doubleMesh',
}

enum REPEAT_TYPE {
  NO_REPEAT = 'no-repeat',
  REPEAT = 'repeat',
  REPEAT_X = 'repeat-x',
  REPEAT_Y = 'repeat-y',
  ROUND = 'round',
  SPACE = 'space',
  FLIPX = 'flipX',
  FLIPY = 'flipY',
  FLIPXY = 'flipXY',
  WATERMARK = 'watermark',
}

@Component({
  selector: 'config-grid-index',
  styles: [`

      nz-select {
        width: 140px;
      }
      .mt20 {
        margin-bottom: 20px;
      }
      .slider-number {
        background: #eee;
        color: #333;
        padding: 3px 7px;
        border-radius: 50%;
        display: inline-block;
        font-size: 12px;
        margin-left: -26px;
        line-height: 1.25;
        /* margin-top: 8px; */
      }
  `],
  template: `
      
        <div class="config-grid-container">
            <nz-tabset style="height: 100vh;">
                <nz-tab nzTitle="网格">
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Grid Type</div>
                        <div nz-col nzSpan="14">
                            <nz-select name="select-grid" [(ngModel)]="gridType">
                                <nz-option [nzValue]="GRID_TYPE.DOT" nzLabel="Dot"></nz-option>
                                <nz-option [nzValue]="GRID_TYPE.FIXED_DOT" nzLabel="Fixed Dot"></nz-option>
                                <nz-option [nzValue]="GRID_TYPE.MESH" nzLabel="Mesh"></nz-option>
                                <nz-option [nzValue]="GRID_TYPE.DOUBLE_MESH" nzLabel="Double Mesh"></nz-option>
                            </nz-select>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Grid Size</div>
                        <div nz-col nzSpan="12">
                          <div style="width: 140px;">
                            <nz-slider [nzMin]="1" [nzMax]="20" [(ngModel)]="value1" ></nz-slider>
                          </div>
                        </div>
                        <div nz-col nzSpan="2">
                        <span class="slider-number">{{value1}}</span>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8" *ngIf="gridType !== 'doubleMesh'">Grid Color</div>
                        <div nz-col nzSpan="8" *ngIf="gridType === 'doubleMesh'">Primary Color</div>
                        <div nz-col nzSpan="14">
                          <select-color [color]="initColor" (sentColor)="getChangeColor($event)"></select-color> 
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8" *ngIf="gridType !== 'doubleMesh'">Thickness</div>
                        <div nz-col nzSpan="8" *ngIf="gridType === 'doubleMesh'">Primary Thickness</div>
                        <div nz-col nzSpan="12">
                          <div style="width: 140px;">
                            <nz-slider [nzMin]="1" [nzMax]="10" [(ngModel)]="value2" ></nz-slider>
                          </div>
                        </div>
                        <div nz-col nzSpan="2" >
                          
                          <span class="slider-number">{{value2}}</span>
                        </div>
                    </div>
                    <div *ngIf="gridType === 'doubleMesh'">
                      <div nz-row nzAlign="middle" class="mt20">
                          <div nz-col nzSpan="8">Secondary Color</div>
                          <div nz-col nzSpan="14">
                            <select-color [color]="secondaryColor" (sentColor)="getChangeSecondColor($event)"></select-color> 
                          </div>
                      </div>
                      <div nz-row nzAlign="middle" class="mt20">
                          <div nz-col nzSpan="8">Secondary Thickness</div>
                          <div nz-col nzSpan="12">
                            <div style="width: 140px;">
                              <nz-slider [nzMin]="1" [nzMax]="10" [(ngModel)]="value2" ></nz-slider>
                            </div>
                          </div>
                          <div nz-col nzSpan="2" >
                            
                            <span class="slider-number">{{value2}}</span>
                          </div>
                      </div>
                    </div>
                </nz-tab>
                <nz-tab nzTitle="背景">
                  <div nz-row nzAlign="middle" class="mt20">
                    <div nz-col nzSpan="8">Color</div>
                      <div nz-col nzSpan="14">
                        <select-color [color]="backgroundColor" (sentColor)="getChangeBgColor($event)"></select-color> 
                      </div>
                  </div>
                  <div nz-row nzAlign="middle" class="mt20">
                    <div nz-col nzSpan="8"></div>
                    <div nz-col nzSpan="14">
                      <label nz-checkbox [(ngModel)]="checkImage">Show Image</label>
                    </div>
                  </div>
                  <div *ngIf="checkImage === true">
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Repeat</div>
                        <div nz-col nzSpan="14">
                            <nz-select name="select-repeat" [(ngModel)]="repeatType">
                                <nz-option [nzValue]="REPEAT_TYPE.NO_REPEAT" nzLabel="No Repeat"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.REPEAT" nzLabel="Repeat"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.REPEAT_X" nzLabel="Pepeat X"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.REPEAT_Y" nzLabel="Repeat Y"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.ROUND" nzLabel="Round"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.SPACE" nzLabel="Space"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.FLIPX" nzLabel="Flip X"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.FLIPY" nzLabel="Filp Y"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.FLIPXY" nzLabel="Flip XY"></nz-option>
                                <nz-option [nzValue]="REPEAT_TYPE.WATERMARK" nzLabel="Watermark"></nz-option>
                            </nz-select>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Position</div>
                        <div nz-col nzSpan="14">
                            <nz-select name="select-position" [(ngModel)]="positionType">
                                <nz-option nzValue="center" nzLabel="Center"></nz-option>
                                <nz-option nzValue="left" nzLabel="Left"></nz-option>
                                <nz-option nzValue="right" nzLabel="Right"></nz-option>
                                <nz-option nzValue="top" nzLabel="Top"></nz-option>
                                <nz-option nzValue="bottom" nzLabel="Bottom"></nz-option>
                            </nz-select>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Size</div>
                        <div nz-col nzSpan="14">
                            <nz-select name="select-size" [(ngModel)]="sizeType">
                                <nz-option nzValue="auto" nzLabel="Auto"></nz-option>
                                <nz-option nzValue="cover" nzLabel="Cover"></nz-option>
                                <nz-option nzValue="contain" nzLabel="Contain"></nz-option>
                                <nz-option nzValue="100% 100%" nzLabel="100% 100%"></nz-option>
                            </nz-select>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Opacity</div>
                        <div nz-col nzSpan="12">
                            <div style="width: 140px;">
                                <nz-slider [nzMin]="0" [nzMax]="1" [nzStep]="0.01" [(ngModel)]="backgroundOpacity"></nz-slider>
                            </div>
                        </div>
                        <div nz-col nzSpan="2">
                            <span class="slider-number">{{backgroundOpacity}}</span>
                        </div>
                    </div>
                  </div>
                </nz-tab>
            </nz-tabset>
        </div>
    `
})



export class ConfigGrid implements OnInit {

  public GRID_TYPE = GRID_TYPE
  public REPEAT_TYPE = REPEAT_TYPE
  public value1: number = 1
  public value2: number = 2
  public backgroundOpacity: number = 0.1

  public gridType: string = 'fixedDot' // 初始化网格类型下拉框
   // 初始化颜色
  public initColor: string = "#468dcc";
  
  public secondaryColor: string = '#38e278'

  public backgroundColor: string = '#468dcc'

  public checkImage: boolean = true

  public repeatType: string = 'space'

  public positionType: string = 'center'

  public sizeType: string = 'auto'
   // 获取颜色的方法Ï
 
  getChangeColor(event): void{
    console.log(event);
    console.log(GRID_TYPE)
  }
  getChangeSecondColor(event): void{
    console.log(event);
  }
  getChangeBgColor(event): void {
    console.log(event);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
