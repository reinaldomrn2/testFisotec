import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  circleMarker,
  geoJSON,
  GeoJSONOptions,
  LatLng,
  LatLngBounds,
  Map,
  tileLayer,
  TileLayer,
} from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: Map;
  private baseLayer: TileLayer;
  private configurationStyle: any = {
    radius: 8,
    color: '#333',
    fillColor: '#FFFA4D',
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
  };
  private mapFitBounds: LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274],
  ]);

  private mapSubject = new BehaviorSubject<any>({});
  public map$ = this.mapSubject.asObservable();

  constructor() {
    this.baseLayer = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        crossOrigin: 'anonymous',
        className: 'OSM',
        maxNativeZoom: 20,
        maxZoom: 22,
        minZoom: 5,
      }
    );
  }

  private async addLuminairesLayer(): Promise<void> {
    const luminaires = await (
      await fetch('assets/data/luminarias.geojson')
    ).json();

    const options: GeoJSONOptions = {
      pointToLayer: (feature: GeoJSON.Feature, latLng: LatLng) =>
        circleMarker(latLng),
      style: (feature) => this.configurationStyle,
      onEachFeature: (feature, layer: any) =>
        layer.on('click', async () => {
          this.mapSubject.next({
            ...this.mapSubject.getValue(),
            information: feature.properties,
          });
          this.handleClickLayer(feature, layer, layers);
        }),
    };
    const layers = geoJSON(luminaires, options).addTo(this.map);
  }

  private handleClickLayer(feature: any, layer: any, layers: any): void {
    layers.resetStyle();
    layer.setStyle({
      fillColor: '#f00',
    });
    const { lat, lng } = layer._latlng;
    this.map.setView([lat, lng], 19);
  }

  public onMapReady(map: Map): void {
    this.map = map;
    this.addLuminairesLayer();
    this.mapSubject.next({
      baseLayer: this.baseLayer,
      mapFitBounds: this.mapFitBounds,
    });
    this.map.setView([37.589242318221686, -4.081699769467511], 15);
  }
}
