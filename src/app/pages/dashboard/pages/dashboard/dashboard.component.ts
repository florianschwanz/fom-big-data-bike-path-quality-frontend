import {Component, OnInit} from '@angular/core';
import {MapBoxStyle} from '../../../../core/mapbox/model/map-box-style.enum';
import {Place} from '../../../../core/mapbox/model/place.model';
import {Overlay} from '../../../../ui/map/model/overlay.model';
import {FirebaseCloudFirestoreService} from '../../../../core/firebase/services/firebase-cloud-firestore.service';
import {BikeActivityMetadataEnvelope} from '../../../../core/firebase/model/bike-activity-metadata-envelope.model';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MaterialIconService} from '../../../../core/ui/services/material-icon.service';

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

  /** Map of bike activity metadata */
  bikeActivityMetadataMap = new Map<string, BikeActivityMetadataEnvelope>();

  /** List of overlays to be displayed */
  overlays: Overlay[] = [];

  /**
   * Constructor
   * @param firebaseCloudFirestoreService Firebase Cloud Firestore service
   * @param iconRegistry Material icon registry
   * @param materialIconService Material icon service
   * @param sanitizer DOM sanitizer
   */
  constructor(private firebaseCloudFirestoreService: FirebaseCloudFirestoreService,
              private iconRegistry: MatIconRegistry,
              private materialIconService: MaterialIconService,
              private sanitizer: DomSanitizer) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init phase
   */
  ngOnInit() {
    this.initializeCloudFirestoreSubscription();
    this.initializeMaterial();

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
        this.initializeOverlay(result.name, result.payload);
      });
    });
  }

  /**
   * Initializes overlay based on a given bike activity
   * @param bikeActivityId bike activity ID
   * @param bikeActivityMetadataEnvelope bike activity metadata envelope
   */
  private initializeOverlay(bikeActivityId: string, bikeActivityMetadataEnvelope: BikeActivityMetadataEnvelope) {
    this.bikeActivityMetadataMap.set(bikeActivityId, bikeActivityMetadataEnvelope);
    this.bikeActivityMetadataMap = new Map(this.bikeActivityMetadataMap);

    Array.from(this.bikeActivityMetadataMap.keys()).forEach(bikeActivityUid => {
      this.overlays.push(new Overlay(`data/measurements/geojson/${bikeActivityUid}`, 'data/measurements/styles/style'));
    });
  }

  /**
   * Initializes material colors and icons
   */
  private initializeMaterial() {
    this.materialIconService.initializeIcons(this.iconRegistry, this.sanitizer);
  }
}
