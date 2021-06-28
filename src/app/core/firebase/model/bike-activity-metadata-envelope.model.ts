/**
 * Represents the metadata of a bike activity
 */
export class BikeActivityMetadataEnvelope {

  /**
   * Constructor
   * @param bikeActivity bike activity
   * @param bikeActivitySamples number of bike activity samples
   * @param userData payload
   */
  constructor(public bikeActivity: BikeActivity, public bikeActivitySamples: number, public userData: UserData) {
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
              public bikeType: any,
              public phonePosition: any,
              public smoothnessType: any,
              public trackingType: any,
              public uploadStatus: any,
              public startTime: any,
              public surfaceType: any,
              public endTime: any) {
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
