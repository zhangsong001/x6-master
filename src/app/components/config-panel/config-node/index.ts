import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config-node-index',
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
      
        <div class="config-node-container">
            <nz-tabset style="height: 100vh;">
                <nz-tab nzTitle="节点">
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Border Color</div>
                        <div nz-col nzSpan="14">
                          <select-color [color]="borderColor" (sentColor)="getChangeColor($event)"></select-color> 
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Border Width</div>
                        <div nz-col nzSpan="12">
                          <div style="width: 140px;">
                            <nz-slider [nzMin]="1" [nzMax]="20" [(ngModel)]="borderWidthValue" ></nz-slider>
                          </div>
                        </div>
                        <div nz-col nzSpan="2">
                        <span class="slider-number">{{ borderWidthValue }}</span>
                        </div>
                    </div>
        
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Fill</div>
                        <div nz-col nzSpan="14">
                          <select-color [color]="fillColor" (sentColor)="getChangeColor($event)"></select-color> 
                        </div>
                    </div>
                </nz-tab>
                <nz-tab nzTitle="文本">
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Font Size</div>
                        <div nz-col nzSpan="12">
                          <div style="width: 140px;">
                            <nz-slider [nzMin]="1" [nzMax]="20" [(ngModel)]="fontSizeValue" ></nz-slider>
                          </div>
                        </div>
                        <div nz-col nzSpan="2">
                        <span class="slider-number">{{ fontSizeValue }}</span>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Font Color</div>
                        <div nz-col nzSpan="14">
                          <select-color [color]="fontColor" (sentColor)="getChangeColor($event)"></select-color> 
                        </div>
                    </div>
                </nz-tab>
            </nz-tabset>
        </div>
    `
})



export class ConfigNode implements OnInit {

  public borderWidthValue: number = 1
  public fontSizeValue: number = 2

   // 初始化颜色
  public borderColor: string = "#468dcc";
  
  public fillColor: string = '#38e278'

  public fontColor: string = '#468dcc'

   // 获取颜色的方法Ï
 
  getChangeColor(event): void{
    console.log(event);
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
