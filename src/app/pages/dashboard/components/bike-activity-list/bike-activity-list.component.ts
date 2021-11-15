import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BikeActivityMetadataEnvelope} from '../../../../core/firebase/model/bike-activity-metadata-envelope.model';

/**
 *  Displays bike activity list
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
    this.bikeActivitiesMetadata = (Array.from(this.bikeActivityMetadataMap.values()) as BikeActivityMetadataEnvelope[])
      .sort((a, b) => {
        const dateA = new Date(0);
        dateA.setUTCSeconds(a.bikeActivity.startTime.epochSecond);
        const dateB = new Date(0);
        dateB.setUTCSeconds(b.bikeActivity.startTime.epochSecond);

        return dateA.getTime() - dateB.getTime();
      }).reverse();
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
