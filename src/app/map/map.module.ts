import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapInformationComponent } from './components/map-information/map-information.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapInformationComponent, MapComponent],
  exports: [MapComponent, MapInformationComponent],
  imports: [CommonModule, MapRoutingModule, LeafletModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapModule {}
