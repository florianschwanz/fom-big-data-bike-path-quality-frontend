import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FirebaseCloudFirestoreService} from './services/firebase-cloud-firestore.service';


@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule
  ],
  providers: [
    FirebaseCloudFirestoreService
  ]
})
export class FirebaseModule {
}
