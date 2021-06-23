import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapboxModule} from './core/mapbox/mapbox.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MapModule} from './ui/map/map.module';
import {MatCardModule} from '@angular/material/card';
import {FirebaseModule} from './core/firebase/firebase.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    // UI modules
    MapModule,
    MatCardModule,

    // Core modules
    MapboxModule,
    FirebaseModule,

    // Firebase modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
