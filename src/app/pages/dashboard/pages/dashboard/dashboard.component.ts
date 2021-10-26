import {Component, OnInit} from '@angular/core';
import {MapBoxStyle} from '../../../../core/mapbox/model/map-box-style.enum';
import {Place} from '../../../../core/mapbox/model/place.model';
import {Overlay} from '../../../../ui/map/model/overlay.model';
import {FirebaseCloudFirestoreService} from '../../../../core/firebase/services/firebase-cloud-firestore.service';
import {BikeActivityMetadataEnvelope} from '../../../../core/firebase/model/bike-activity-metadata-envelope.model';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MaterialIconService} from '../../../../core/ui/services/material-icon.service';
import {BoundingBox} from '../../../../ui/map/model/bounding-box.model';

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

  /** Fly-to bounding box */
  flyToBoundingBox: BoundingBox;
  /** Opacities */
  opacities = new Map<string, number>();
  /** Initial opacity */
  initialOpacity = 25;
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

    bikeActivityMetadataEnvelope.bikeActivity.uid = bikeActivityId;

    this.bikeActivityMetadataMap.set(bikeActivityId, bikeActivityMetadataEnvelope);
    this.bikeActivityMetadataMap = new Map(this.bikeActivityMetadataMap);

    Array.from(this.bikeActivityMetadataMap.keys()).forEach(bikeActivityUid => {
      this.overlays.push(new Overlay(`data/measurements/geojson/${bikeActivityUid}`, 'data/measurements/styles/style'));
      this.opacities.set(bikeActivityUid, 0.0);
      this.opacities = new Map(this.opacities);
    });
  }

  /**
   * Initializes material colors and icons
   */
  private initializeMaterial() {
    this.materialIconService.initializeIcons(this.iconRegistry, this.sanitizer);
  }

  //
  // Actions
  //

  /**
   * Handles click on activity
   */
  onBikeActivityClicked(bikeActivityUid: string) {

    // Get metadata envelope of selected bike activity
    const bikeActivityMetadataEnvelope = this.bikeActivityMetadataMap.get(bikeActivityUid);
    const bikeActivityBounds = bikeActivityMetadataEnvelope.bikeActivityBounds;

    // Define fly-to bounding box
    this.flyToBoundingBox = [
      bikeActivityBounds.lonWest,
      bikeActivityBounds.latNorth,
      bikeActivityBounds.lonEast,
      bikeActivityBounds.latSouth
    ];

    // Reset opacity of all layers
    this.opacities.forEach((value: number, key: string) => {
      this.opacities.set(key, this.initialOpacity / 5);
    });

    // Set opacity of selected bike activity
    this.opacities.set(bikeActivityUid, 100.0);
    this.opacities = new Map(this.opacities);
  }

  /**
   * Handles click on activity surface type
   */
  onBikeActivitySurfaceTypeClicked(bikeActivitySurfaceType: string) {
  }
}
