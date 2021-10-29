import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BikeActivityMetadataEnvelope} from '../../../../core/firebase/model/bike-activity-metadata-envelope.model';

/**
 * Displays bike activity list
 */
@Component({
  selector: 'app-bike-activity-list',
  templateUrl: './bike-activity-list.component.html',
  styleUrls: ['./bike-activity-list.component.scss']
})
export class BikeActivityListComponent implements OnInit, OnChanges {

  /** Map of bike activity metadata */
  @Input() bikeActivityMetadataMap = new Map<string, BikeActivityMetadataEnvelope>();
  /** Event emitter indicating change in example */
  @Output() bikeActivityClickedEventEmitter = new EventEmitter<string>();
  /** Event emitter indicating a click on a surface type button */
  @Output() bikeActivitySurfaceTypeClickedEventEmitter = new EventEmitter<string>();
  /** Event emitter indicating a click on lab conditions button */
  @Output() labConditionClickedEventEmitter = new EventEmitter<boolean>();
  /** Event emitter indicating bike activities have been filtered */
  @Output() bikeActivitiesFilteredEventEmitter = new EventEmitter<string[]>();

  /** Expansion panel step currently active */
  expansionPanelStep = 0;

  /** List of bike activity metadata */
  bikeActivitiesMetadata: BikeActivityMetadataEnvelope[] = [];
  /** List of bike activity surface types */
  bikeActivitySurfaceTypes: string[] = [];


  filterSurfaceType = null;
  filterLabConditions = false;

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init phase
   */
  ngOnInit() {
  }

  /**
   * Handles on-changes phase
   */
  ngOnChanges(changes: SimpleChanges) {

    this.initializeBikeActivityMetadata();
    this.initializeBikeActivitySurfaceTypes();

    this.bikeActivitySurfaceTypeClickedEventEmitter.subscribe(bikeActivitySurfaceType => {
      this.filterSurfaceType = bikeActivitySurfaceType;
      this.initializeBikeActivityMetadata();
    });
    this.labConditionClickedEventEmitter.subscribe(labCondition => {
      this.filterLabConditions = labCondition;
      this.initializeBikeActivityMetadata();
    })
  }

  //
  // Initialization
  //

  /**
   * Initializes bike activity metadata
   * @private
   */
  private initializeBikeActivityMetadata() {
    this.bikeActivitiesMetadata = (Array.from(this.bikeActivityMetadataMap.values()) as BikeActivityMetadataEnvelope[])
      .filter(bikeActivityMetadata => {
        return (this.filterSurfaceType === null || this.filterSurfaceType === bikeActivityMetadata.bikeActivity.surfaceType)
          && (!this.filterLabConditions || bikeActivityMetadata.bikeActivity.flaggedLabConditions);
      })
      .sort((a, b) => {
        const dateA = new Date(0);
        dateA.setUTCSeconds(a.bikeActivity.startTime.epochSecond);
        const dateB = new Date(0);
        dateB.setUTCSeconds(b.bikeActivity.startTime.epochSecond);

        return dateA.getTime() - dateB.getTime();
      }).reverse();

    const bikeActivityMetadataIds = this.bikeActivitiesMetadata.map(bikeActivityMetadata => {
      return bikeActivityMetadata.bikeActivity.uid;
    });

    this.bikeActivitiesFilteredEventEmitter.emit(bikeActivityMetadataIds);
  }

  /**
   * Initializes surface types
   * @private
   */
  private initializeBikeActivitySurfaceTypes() {
    const bikeActivitySurfaceTypesMap = new Map<string, string>();

    (Array.from(this.bikeActivityMetadataMap.values()) as BikeActivityMetadataEnvelope[]).forEach(bikeActivityMetadata => {
      const surfaceType = bikeActivityMetadata.bikeActivity.surfaceType;
      bikeActivitySurfaceTypesMap.set(surfaceType, surfaceType);
    });
    this.bikeActivitySurfaceTypes = Array.from(bikeActivitySurfaceTypesMap.values());
  }

  //
  // Actions
  //

  /**
   * Handles click on activity
   */
  onBikeActivityClicked(bikeActivityUid: string) {
    this.bikeActivityClickedEventEmitter.emit(bikeActivityUid);
  }

  /**
   * Handles click on activity surface type
   * @param bikeActivitySurfaceType bike activity surface type
   */
  onActivitySurfaceTypeClicked(bikeActivitySurfaceType: string) {
    this.bikeActivitySurfaceTypeClickedEventEmitter.emit(bikeActivitySurfaceType);
    this.onExpansionPanelOpened(0);
  }

  /**
   * Handles click on lab conditions button
   */
  onLabConditionsClicked(active: boolean) {
    this.labConditionClickedEventEmitter.emit(active);
    this.onExpansionPanelOpened(0);
  }

  /**
   * Handles opening of expansion panel step
   * @param expansionPanelStep expansion panel step
   */
  onExpansionPanelOpened(expansionPanelStep: number) {
    this.expansionPanelStep = expansionPanelStep;
  }
}
