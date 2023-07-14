import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/event',
  },
  /*{
    path: 'charts',
    loadChildren: () =>
      import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('modules/dashboard/dashboard-routing.module').then(
        m => m.DashboardRoutingModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
  },*/
  {
    path: 'event',
    loadChildren: () =>
      import('./current-event/current-event-routing.module').then(m => m.CurrentEventRoutingModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./event/event-routing.module').then(m => m.EventRoutingModule),
  },
  {
    path: 'promoters',
    loadChildren: () =>
      import('./promoter/promoter-routing.module').then(m => m.PromoterRoutingModule),
  },
  /*{
    path: 'version',
    loadChildren: () =>
      import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
