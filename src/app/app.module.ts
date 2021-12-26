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
import {environment} from '../environments/environment';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    // UI modules
    MapModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,

    // Core modules
    MapboxModule,
    FirebaseModule,

    // Firebase modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
