import {TestBed} from '@angular/core/testing';

import {FirebaseCloudFirestoreService} from './firebase-cloud-firestore.service';

describe('FirebaseCloudFirestoreService', () => {
  let service: FirebaseCloudFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCloudFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
