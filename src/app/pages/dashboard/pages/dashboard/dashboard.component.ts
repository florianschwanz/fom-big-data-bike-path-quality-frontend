import {Component, OnInit} from '@angular/core';
import {MapBoxStyle} from '../../../../core/mapbox/model/map-box-style.enum';
import {Place} from '../../../../core/mapbox/model/place.model';
import {Overlay} from '../../../../ui/map/model/overlay.model';

/**
 * Displays a dashboard
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /** Height of the map */
  mapHeight = '100vh';

  /** Enum representing places */
  placeEnum = Place;
  /** Enum representing map box style */
  mapBoxStyleEnum = MapBoxStyle;

  /** List of measurements */
  measurementsOverlays = [
    '163076c4-29bc-4ccd-923a-200150907665.geojson',
    '8e411aab-d139-468f-bba4-5a71a2cfb93a.geojson',
    '20b7856b-ca15-4c9d-b765-8ca67fed20c5.geojson',
    'd2d7e55d-fa30-4b46-b8a5-22736445c104.geojson',
    '563b78f1-5c36-4033-8354-dd37edc0a5c5.geojson',
    'd960028b-9464-474b-b3d9-dc264bc5699e.geojson',
    '571c8c01-d398-40e9-a5ad-b502927a723b.geojson',
    'de431c36-4ca4-46da-9c12-a1829d28069f.geojson',
    '66b3f41b-9918-447f-97ff-e81054e144cf.geojson',
    'de9e8b87-f7cd-42ed-8348-0a659437ebb0.geojson',
  ];

  /** List of overlays to be displayed */
  overlays: Overlay[] = [];

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init phase
   */
  ngOnInit() {
    this.measurementsOverlays.forEach(measurement => {
      this.overlays.push(new Overlay(`measurements/geojson/${measurement.replace('.geojson', '')}`, 'measurements/styles/style'));
    });
  }
}
