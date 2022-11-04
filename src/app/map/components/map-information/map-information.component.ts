import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapService } from '../../services/map.service';
import {
  fadeInEffect,
  mapInformationEffect,
} from 'src/app/shared/global.animations';
import { Rows } from '../../interfaces/rows.interfaces';

@Component({
  selector: 'app-map-information',
  templateUrl: './map-information.component.html',
  styleUrls: ['./map-information.component.css'],
  animations: [mapInformationEffect, fadeInEffect],
})
export class MapInformationComponent implements OnInit, OnDestroy {
  private mapSubscription!: Subscription;
  public information: any = {};
  public notSelected: boolean = true;
  public rows: Rows[] = [
    { name: 'Alta', key: 'alta' },
    { name: 'Altura', key: 'altura' },
    { name: 'Cantidad de lamparas', key: 'cantidad_lamparas' },
    { name: 'Centro de mando', key: 'centro_mando' },
    { name: 'Circuito', key: 'circuito' },
    { name: 'Distancia de eje', key: 'distancia_eje' },
    { name: 'Equipo auxiliar', key: 'equipo_auxiliar' },
    { name: 'Estado de la lampara', key: 'estado_lampara' },
    { name: 'Estado de luminaria', key: 'estado_luminaria' },
    { name: 'Estado de soporte', key: 'estado_soporte' },
    { name: 'Envío', key: 'envio' },
    { name: 'Fecha de alta', key: 'fecha_alta' },
    { name: 'Fecha de envío', key: 'fecha_envio' },
    { name: 'Fecha de modificación', key: 'fecha_modificado' },
    { name: 'Herramienta', key: 'herramienta' },
    { name: 'Id del centro de mando', key: 'id_centro_mando' },
    { name: 'Id del circuito', key: 'id_circuito' },
    { name: 'Id de la iuminaria', key: 'id_luminaria' },
    { name: 'Lado vía', key: 'lado_via' },
    { name: 'Longitud del brazo', key: 'longitud_brazo' },
    { name: 'Marca de lampara', key: 'marca_lampara' },
    { name: 'Marca de luminaria', key: 'marca_luminaria' },
    { name: 'Marca de soporte', key: 'marca_soporte' },
    { name: 'Modelo de lampara', key: 'modelo_lampara' },
    { name: 'Modelo de luminaria', key: 'modelo_luminaria' },
    { name: 'Modelo de soporte', key: 'modelo_soporte' },
    { name: 'Modificado', key: 'modificado' },
    { name: 'Número', key: 'numero' },
    { name: 'Número de registro', key: 'numero_registro' },
    { name: 'Observaciones', key: 'observaciones' },
    { name: 'Operativa', key: 'operativa' },
    { name: 'Orientación', key: 'orientacion' },
    { name: 'Orientación del brazo', key: 'orientacion_brazo' },
    { name: 'Potencia', key: 'potencia' },
    { name: 'Punto luz', key: 'punto_luz' },
    { name: 'S1', key: 's1' },
    { name: 'S2', key: 's2' },
    { name: 'Situacion de equipo auxiliar', key: 'situacion_equipo_auxiliar' },
    { name: 'Situacion soporte', key: 'situacion_soporte' },
    { name: 'Tamaño del brazo', key: 'tamano_brazo' },
    { name: 'Tipo de lampara', key: 'tipo_lampara' },
    { name: 'Tipo de luminaria', key: 'tipo_luminaria' },
    { name: 'Tipo de soporte', key: 'tipo_soporte' },
    { name: 'Usuario de alta', key: 'usuario_alta' },
    { name: 'Usuario de modificación', key: 'usuario_modificado' },
    { name: 'Vial', key: 'vial' },
  ];

  public constructor(
    public _mapService: MapService,
    private cdRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.mapSubscription = this._mapService.map$.subscribe((data) => {
      if (data.information) {
        this.information = data.information;
        this.notSelected = false;
        this.cdRef.detectChanges();
      }
    });
  }

  public ngOnDestroy(): void {
    this.mapSubscription.unsubscribe();
  }

  public getString(value: any): string {
    if (value == false) return 'No';
    else if (value == true) return 'No';
    else if (value == null) return '-';
    else return value;
  }
}
