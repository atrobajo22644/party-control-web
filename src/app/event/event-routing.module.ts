import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Module */
import {EventModule} from "./event.module";

/* Containers */
import * as eventContainers from './containers';

/* Data */
import {RouteData} from "../navigation/models";

/* Routes */
export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [],
    component: eventContainers.EventsComponent,
    data: {
      title: 'Events - Party Control'
    } as RouteData,
  },
];

@NgModule({
  imports: [EventModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
