import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  /** Bike activity metadata */
  @Input() bikeActivityMetadata: BikeActivityMetadataEnvelope;
  /** Event emitter indicating click on a bike activity */
  @Output() bikeActivityClickedEventEmitter = new EventEmitter<string>();

  /** Start time */
  startTime = '';
  /** End time */
  endTime = '';

  //
  // Helper
  //

  /**
   * Formats date
   * @param epochSecond epoch seconds
   */
  static getDateLong(epochSecond: number): string {
    const date = new Date(0);
    date.setUTCSeconds(epochSecond);

    const dateStringElements = date.toDateString().split(' ');
    const timeStringElements = date.toTimeString().split(' ');

    const month = dateStringElements[1];
    const day = dateStringElements[2];
    const time = timeStringElements[0];

    return `${month} ${day} ${time}`;
  }

  /**
   * Formats date
   * @param epochSecond epoch seconds
   */
  static getDateShort(epochSecond: number): string {
    const date = new Date(0);
    date.setUTCSeconds(epochSecond);

    const timeStringElements = date.toTimeString().split(' ');

    const time = timeStringElements[0];

    return `${time}`;
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init phase
   */
  ngOnInit() {
    this.startTime = BikeActivityMetadataComponent.getDateLong(this.bikeActivityMetadata.bikeActivity.startTime.epochSecond);
    this.endTime = BikeActivityMetadataComponent.getDateShort(this.bikeActivityMetadata.bikeActivity.endTime.epochSecond);
  }

  //
  // Actions
  //

  /**
   * Handles click on activity
   */
  onBikeActivityClicked() {
    const uid = this.bikeActivityMetadata.bikeActivity.uid;
    const uidString = this.toUuidString(uid.leastSignificantBits, uid.mostSignificantBits);

    this.bikeActivityClickedEventEmitter.emit(uidString);
  }

  //
  // Helpers
  //

  /**
   * Creates a UUID from least-significant bits and most-significant bits
   * @see https://stackoverflow.com/a/66304548
   *
   * @param lsb least-significant bits
   * @param msb most-significant bits
   */
  toUuidString(lsb: bigint, msb: bigint): string {
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    return `${this.digits(BigInt(msb) >> 32n, 8n)}-${this.digits(BigInt(msb) >> 16n, 4n)}-${this.digits(BigInt(msb), 4n)}-${this.digits(BigInt(lsb) >> 48n, 4n)}-${this.digits(BigInt(lsb), 12n)}`;
  }

  /**
   * Creates digits from a big integer
   * @param val value
   * @param digits digits
   */
  digits(val: bigint, digits: bigint): string {
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    const hi = 1n << (digits * 4n);
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    return (hi | (val & (hi - 1n))).toString(16).substring(1);
  }
}
