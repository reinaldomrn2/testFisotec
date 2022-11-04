import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HighChartsService } from '../../services/high-charts.service';
import { Subscription } from 'rxjs';
import { fadeInEffect } from 'src/app/shared/global.animations';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css'],
  animations: [fadeInEffect],
})
export class HighChartComponent implements OnInit, OnDestroy {
  public filter!: FormGroup;
  public total: number = 0;
  public isEmpty: boolean = true;
  private highChartSuscription!: Subscription;
  constructor(
    private _formBuilder: FormBuilder,
    private _highChartsService: HighChartsService
  ) {}

  ngOnInit(): void {
    this.filter = this._formBuilder.group({
      filter: [''],
    });

    this.highChartSuscription = this._highChartsService.highCharts$.subscribe(
      (data) => {
        if (data) this.total = data.total;
      }
    );
  }

  ngOnDestroy(): void {
    this.highChartSuscription.unsubscribe();
  }

  public handleChange(): void {
    const value = this.filter.get('filter')?.value;
    if (value !== '') {
      this._highChartsService.generateChart(value);
      this.isEmpty = false;
    } else this.isEmpty = true;
  }

  public get typeFilterSelected(): string {
    switch (this.filter.get('filter')?.value) {
      case 'tipo_soporte':
        return 'Tipo de soporte';
      case 'tipo_luminaria':
        return 'Tipo de luminaria';
      case 'tipo_lampara':
        return 'Tipo de lampara';
      default:
        return '';
    }
  }
}
