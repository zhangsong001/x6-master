import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config-edge-index',
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
      
        <div class="config-edge-container">
            <nz-tabset style="height: 100vh;">
                <nz-tab nzTitle="线条">
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Width</div>
                        <div nz-col nzSpan="12">
                          <div style="width: 140px;">
                            <nz-slider [nzMin]="1" [nzMax]="20" [(ngModel)]="lineWidthValue" ></nz-slider>
                          </div>
                        </div>
                        <div nz-col nzSpan="2">
                        <span class="slider-number">{{ lineWidthValue }}</span>
                        </div>
                    </div>
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Color</div>
                        <div nz-col nzSpan="14">
                          <select-color [color]="lineColor" (sentColor)="getChangeColor($event)"></select-color> 
                        </div>
                    </div>
           
        
                    <div nz-row nzAlign="middle" class="mt20">
                        <div nz-col nzSpan="8">Connector</div>
                        <div nz-col nzSpan="14">
                            <nz-select name="select-connector" [(ngModel)]="connectorType">
                                <nz-option nzValue="normal" nzLabel="Normal"></nz-option>
                                <nz-option nzValue="smooth" nzLabel="Smooth"></nz-option>
                                <nz-option nzValue="rounded" nzLabel="Rounded"></nz-option>
                                <nz-option nzValue="jumpover" nzLabel="Jumpover"></nz-option>
                            </nz-select>
                        </div>
                    </div>
                </nz-tab>
            </nz-tabset>
        </div>
    `
})



export class ConfigEdge implements OnInit {

  public lineWidthValue: number = 1

  public connectorType: string = 'normal'

   // 初始化颜色
  public lineColor: string = "#468dcc";

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
