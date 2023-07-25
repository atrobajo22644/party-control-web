import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Module */
import {CurrentEventModule} from "./current-event.module";

/* Containers */
import * as containers from './containers';

/* Data */
import {RouteData} from "../navigation/models";

/* Routes */
export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [],
    component: containers.EventComponent,
    data: {
      title: 'Current event - Party Control'
    } as RouteData,
  },
];

@NgModule({
  imports: [CurrentEventModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CurrentEventRoutingModule { }
