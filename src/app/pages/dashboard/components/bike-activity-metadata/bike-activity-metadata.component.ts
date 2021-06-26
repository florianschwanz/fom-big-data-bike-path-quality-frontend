import {Component, Input, OnInit} from '@angular/core';
import {BikeActivityMetadataEnvelope} from '../../../../core/firebase/model/bike-activity-metadata-envelope.model';

/**
 * Displays bike activity metadata
 */
@Component({
  selector: 'app-bike-activity-metadata',
  templateUrl: './bike-activity-metadata.component.html',
  styleUrls: ['./bike-activity-metadata.component.scss']
})
export class BikeActivityMetadataComponent implements OnInit {

  @Input() bikeActivityMetadata: BikeActivityMetadataEnvelope;

  startTime = '';
  endTime = '';

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init phase
   */
  ngOnInit() {
    this.startTime = this.getDateLong(this.bikeActivityMetadata.bikeActivity.startTime.epochSecond);
    this.endTime = this.getDateShort(this.bikeActivityMetadata.bikeActivity.endTime.epochSecond);
  }

  //
  // Helper
  //

  private getDateLong(epochSecond: number): string {
    const date = new Date(0);
    date.setUTCSeconds(epochSecond);

    const dateStringElements = date.toDateString().split(' ');
    const timeStringElements = date.toTimeString().split(' ');

    const weekday = dateStringElements[0];
    const month = dateStringElements[1];
    const day = dateStringElements[2];
    const year = dateStringElements[3];
    const time = timeStringElements[0];

    return `${month} ${day} ${time}`;
  }

  private getDateShort(epochSecond: number): string {
    const date = new Date(0);
    date.setUTCSeconds(epochSecond);

    const timeStringElements = date.toTimeString().split(' ');

    const time = timeStringElements[0];

    return `${time}`;
  }
}
