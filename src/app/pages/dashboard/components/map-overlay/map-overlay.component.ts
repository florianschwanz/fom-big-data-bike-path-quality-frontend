import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BikeActivityMetadataEnvelope} from '../../../../core/firebase/model/bike-activity-metadata-envelope.model';

/**
 * Displays map overlay
 */
@Component({
  selector: 'app-map-overlay',
  templateUrl: './map-overlay.component.html',
  styleUrls: ['./map-overlay.component.scss']
})
export class MapOverlayComponent implements OnInit, OnChanges {

  /** Map of bike activity metadata */
  @Input() bikeActivityMetadataMap = new Map<string, BikeActivityMetadataEnvelope>();
  /** Event emitter indicating change in example */
  @Output() bikeActivityClickedEventEmitter = new EventEmitter<string>();

  /** List of bike activity metadata */
  bikeActivitiesMetadata: BikeActivityMetadataEnvelope[] = [];

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
    this.bikeActivitiesMetadata = Array.from(this.bikeActivityMetadataMap.values());
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
}
