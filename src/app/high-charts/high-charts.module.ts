import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HighChartsRoutingModule } from './high-charts-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';


@NgModule({
  declarations: [HighChartComponent, ChartPieComponent],
  imports: [
    CommonModule,
    HighChartsRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
  ],
  exports: [HighChartComponent],
})
export class HighChartsModule {}
