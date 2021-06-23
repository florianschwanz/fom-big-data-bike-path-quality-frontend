/**
 * Represents a result of an analysis
 */
export class BikeActivityMetaDataEnvelope {

  /**
   * Constructor
   * @param bikeActivity bike activity
   * @param userData payload
   */
  constructor(public bikeActivity: BikeActivity, public userData: UserData) {
  }
}

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

export class UserData {

  /**
   * Constructor
   */
  constructor(public startTime: any,
              public uid: any) {
  }
}
