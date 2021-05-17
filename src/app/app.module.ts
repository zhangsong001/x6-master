import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { GraphService } from './service/graph.service'
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ColorPickerModule } from 'ngx-color-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


import { ConfigPanelComponent } from './components/config-panel'
import { ConfigGrid } from './components/config-panel/config-grid'
import { ConfigNode } from './components/config-panel/config-node'
import { ConfigEdge } from './components/config-panel/config-edge'
import { SelectColorComponent } from './components/color-picker'




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ConfigPanelComponent,
    ConfigGrid,
    ConfigNode,
    ConfigEdge,
    SelectColorComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDividerModule,
    NzLayoutModule,
    NzTabsModule,
    NzGridModule,
    NzSelectModule,
    NzSliderModule,
    NzInputModule,
    ColorPickerModule,
    NzCheckboxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, GraphService],
  bootstrap: [AppComponent]
})

export class AppModule { }
