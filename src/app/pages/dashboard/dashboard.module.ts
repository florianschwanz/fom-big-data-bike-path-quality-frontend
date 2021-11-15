import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MapModule} from '../../ui/map/map.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {BikeActivityListComponent} from './components/bike-activity-list/bike-activity-list.component';
import {BikeActivityListItemComponent} from './components/bike-activity-list-item/bike-activity-list-item.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DashboardComponent, BikeActivityListComponent, BikeActivityListItemComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MapModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatRippleModule,
        ScrollingModule
    ]
})

export class DashboardModule {
}
