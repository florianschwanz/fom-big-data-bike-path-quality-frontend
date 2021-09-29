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
   * Constructor
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

export class LatLng {

  constructor(public latitude, public longitude) {
  }
}

/**
 * Represents user data
 */
export class UserData {

  /**
   * Constructor
   */
  constructor(public startTime: any,
              public uid: any) {
  }
}
