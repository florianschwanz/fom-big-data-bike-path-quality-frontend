import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
