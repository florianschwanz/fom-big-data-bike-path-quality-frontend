import {Component, OnInit} from '@angular/core';
import {MapBoxStyle} from '../../../../core/mapbox/model/map-box-style.enum';
import {Place} from '../../../../core/mapbox/model/place.model';
import {Overlay} from '../../../../ui/map/model/overlay.model';
import {FirebaseCloudFirestoreService} from '../../../../core/firebase/services/firebase-cloud-firestore.service';
import {BikeActivityMetaDataEnvelope} from '../../../../core/firebase/model/bike-activity-meta-data-envelope.model';

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

  /** List of bike activity metadata */
  bikeActivityMetadataMap = new Map<string, BikeActivityMetaDataEnvelope>();

  /** List of overlays to be displayed */
  overlays: Overlay[] = [];

  constructor(private firebaseCloudFirestoreService: FirebaseCloudFirestoreService) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init phase
   */
  ngOnInit() {
    this.initializeCloudFirestoreSubscription();

    // this.measurementsOverlays.forEach(measurement => {
    //   this.overlays.push(new Overlay(`measurements/geojson/${measurement.replace('.geojson', '')}`, 'measurements/styles/style'));
    // });

    this.firebaseCloudFirestoreService.readResults();
  }

  //
  // Initialization
  //

  /**
   * Initializes results subscription from Cloud Firestore
   */
  private initializeCloudFirestoreSubscription() {
    this.firebaseCloudFirestoreService.resultsSubject.subscribe(results => {
      results.forEach(result => {
        this.initializeOverlays(result.name, result.payload);
      });
    });
  }

  private initializeOverlays(name: string, bikeActivityMetadataEnvelope: BikeActivityMetaDataEnvelope) {
    this.bikeActivityMetadataMap.set(name, bikeActivityMetadataEnvelope);

    Array.from(this.bikeActivityMetadataMap.keys()).forEach(bikeActivityUid => {
      this.overlays.push(new Overlay(`data/measurements/geojson/${bikeActivityUid}`, 'data/measurements/styles/style'));
    });
  }
}
