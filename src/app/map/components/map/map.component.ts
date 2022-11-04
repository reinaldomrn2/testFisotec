import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LatLngBounds, Map, TileLayer } from 'leaflet';
import { MapService } from '../../services/map.service';
import { Subscription } from 'rxjs';
import { mapEffect } from 'src/app/shared/global.animations';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations: [mapEffect],
})
export class MapComponent implements OnInit, OnDestroy {
  private mapSubscription!: Subscription;
  public baseLayer!: TileLayer;
  public mapFitBounds!: LatLngBounds;

  public constructor(
    public _mapService: MapService,
    private cdRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.mapSubscription = this._mapService.map$.subscribe((data) => {
      if (Object.keys(data).length > 0) {
        this.baseLayer = data.baseLayer;
        this.mapFitBounds = data.mapFitBounds;
        this.cdRef.detectChanges();
      }
    });
  }

  public ngOnDestroy(): void {
    this.mapSubscription.unsubscribe();
  }

  public onMapReady(map: Map): void {
    this._mapService.onMapReady(map);
  }
}
