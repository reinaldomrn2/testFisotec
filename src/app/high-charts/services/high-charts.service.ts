import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HighChartsService {
  private data!: any[];
  private type!: string;
  private highChartsSubject = new BehaviorSubject<any>(undefined);
  public highCharts$ = this.highChartsSubject.asObservable();

  constructor() {}

  public generateChart(type: string): void {
    this.setData();
    this.type = type;
  }

  private async setData(): Promise<void> {
    const response = await (
      await fetch('assets/data/luminarias.geojson')
    ).json();
    this.data = response.features;
    this.postChart();
  }

  private countForType(): any[] {
    let result: any[] = [];
    this.data.map(({ properties: item }) => {
      const indexArray = result.findIndex((row) => row.name == item[this.type]);
      if (indexArray >= 0) {
        result[indexArray].count += 1;
      } else {
        if (item[this.type] !== null)
          result = [...result, { name: item[this.type], count: 1 }];
      }
    });
    return result;
  }

  private get arrayPercentage(): any[] {
    let result: any[] = [];
    const total = this.data.length;
    const arrayCount = this.countForType();
    arrayCount.map((item) => {
      result = [
        ...result,
        [item.name, parseFloat(((item.count * 100) / total).toFixed(2))],
      ];
    });
    return result;
  }

  private postChart(): void {
    this.highChartsSubject.next({
      data: this.arrayPercentage,
      total: this.data.length,
    });
  }
}
