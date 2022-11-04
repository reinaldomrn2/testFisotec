import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { HighChartsService } from '../../services/high-charts.service';
import { fadeInEffect } from '../../../shared/global.animations';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css'],
  animations: [ fadeInEffect ],
})
export class ChartPieComponent implements OnInit, OnDestroy {
  private highChartsSubscription!: Subscription;
  public Highcharts = Highcharts;
  public options: any = {
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    title: '',
    series: [
      {
        type: 'pie',
        data: [],
      },
    ],
  };

  constructor(private _highChartsService: HighChartsService) {}

  ngOnInit(): void {
    this.highChartsSubscription = this._highChartsService.highCharts$.subscribe(
      (data) => {
        if (data) {
          this.options = {
            ...this.options,
            series: [
              {
                type: 'pie',
                name: 'Browser share',
                data: data.data,
              },
            ],
          };
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.highChartsSubscription.unsubscribe();
  }
}
