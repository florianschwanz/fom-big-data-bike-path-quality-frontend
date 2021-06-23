import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Subject} from 'rxjs';
import {ListResult} from '@angular/fire/storage/interfaces';
import {HttpClient} from '@angular/common/http';
import {Result} from '../model/result.model';

/**
 * Handles Storage access
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  /** Results subject */
  resultsSubject: Subject<Result[]>;

  /** Helper subject used to finish other subscriptions */
  private unsubscribeSubject = new Subject();

  /**
   * Constructor
   * @param angularFireStorage Angular Fire Storage
   * @param http http client
   */
  constructor(private angularFireStorage: AngularFireStorage,
              private http: HttpClient) {
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
   * Reads the results
   */
  readResults() {
    const storage = this.angularFireStorage.storage;
    const storageReference = storage.ref().child('results');

    storageReference.listAll().then((result: ListResult) => {
      result.items.forEach(item => {
        const name = item.name;
        item.getDownloadURL().then(url => {
          this.http.get(url, {responseType: 'text' as 'json'}).subscribe(data => {
            this.resultsSubject.next([new Result(name, data)]);
          });
        });
      });
    });
  }
}
