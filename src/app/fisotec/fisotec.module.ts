import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FisotecRoutingModule } from './fisotec-routing.module';
import { FisotecViewComponent } from './views/fisotec-view/fisotec-view.component';
import { FisotecToolBarComponent } from './components/fisotec-tool-bar/fisotec-tool-bar.component';
import { HighChartsModule } from '../high-charts/high-charts.module';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [FisotecViewComponent, FisotecToolBarComponent],
  imports: [MapModule, HighChartsModule, CommonModule, FisotecRoutingModule],
})
export class FisotecModule {}
