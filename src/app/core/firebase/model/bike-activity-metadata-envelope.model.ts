/**
 * Represents the metadata of a bike activity
 */
export class BikeActivityMetadataEnvelope {

  /**
   * Constructor
   * @param bikeActivity bike activity
   * @param bikeActivitySamples number of bike activity samples
   * @param bikeActivityBounds bike activity bounds
   * @param userData payload
   */
  constructor(public bikeActivity: BikeActivity,
              public bikeActivitySamples: number,
              public bikeActivityBounds: LatLngBounds,
              public userData: UserData) {
  }
}

/**
 * Represents a bike activity
 */
export class BikeActivity {

  /**
   * COnstructor
   * @param uid id
   * @param startTime start time
   * @param endTime end time
   * @param trackingType tracking type
   * @param uploadStatus upload status
   * @param surfaceType surface type
   * @param smoothnessType smoothness type
   * @param phonePosition phone position
   * @param bikeType bike type
   * @param flaggedLabConditions flagged lab conditions
   */
  constructor(public uid: any,
              public startTime: any,
              public endTime: any,
              public trackingType: any,
              public uploadStatus: any,
              public surfaceType: any,
              public smoothnessType: any,
              public phonePosition: any,
              public bikeType: any,
              public flaggedLabConditions: any) {
  }
}

/**
 * Represents lat/lon bounds
 */
export class LatLngBounds {

  /**
   * Constructor
   * @param center center
   * @param emptySpan empty span
   * @param latNorth latitude North
   * @param latSouth latitude South
   * @param latitudeSpan latitude span
   * @param lonEast longitude East
   * @param lonWest longitude West
   * @param longitudeSpan longitude span
   */
  constructor(public center: LatLng,
              public emptySpan: boolean,
              public latNorth: number,
              public latSouth: number,
              public latitudeSpan: number,
              public lonEast: number,
              public lonWest: number,
              public longitudeSpan: number) {
  }
}

/**
 * Represents lat/lon
 */
export class LatLng {

  /**
   * Constructor
   * @param latitude latitude
   * @param longitude longitude
   */
  constructor(public latitude, public longitude) {
  }
}

/**
 * Represents user data
 */
export class UserData {

  /**
   * Constructor
   * @param startTime start time
   * @param uid id
   */
  constructor(public startTime: any,
              public uid: any) {
  }
}
