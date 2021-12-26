import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseCloudFirestoreService} from './services/firebase-cloud-firestore.service';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


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
