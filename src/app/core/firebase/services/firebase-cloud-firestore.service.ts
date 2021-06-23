import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {Result} from '../model/result.model';

/**
 * Handles Cloud Firestore access
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudFirestoreService {

  /** Results subject */
  resultsSubject: Subject<Result[]>;

  /** Helper subject used to finish other subscriptions */
  private unsubscribeSubject = new Subject();

  /**
   * Constructor
   * @param angularFirestore Angular Firestore
   */
  constructor(private angularFirestore: AngularFirestore) {
    this.resultsSubject = new Subject<any[]>();
  }

  /**
   * Cancels subscription
   */
  cancelSubscription() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  /**
   * Reads results of a given user
   */
  readResults() {
    this.angularFirestore.collection<any>('measurements').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        return new Result(a.payload.doc.id, a.payload.doc.data() as any);
      }))
    ).pipe(
      takeUntil(this.unsubscribeSubject)
    ).subscribe(results => {
        this.resultsSubject.next(results);
      }
    );
  }
}
