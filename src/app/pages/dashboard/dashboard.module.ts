import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MapModule} from '../../ui/map/map.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MapOverlayComponent} from './components/map-overlay/map-overlay.component';
import {BikeActivityMetadataComponent} from './components/bike-activity-metadata/bike-activity-metadata.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [DashboardComponent, MapOverlayComponent, BikeActivityMetadataComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MapModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatRippleModule
  ]
})

export class DashboardModule {
}
