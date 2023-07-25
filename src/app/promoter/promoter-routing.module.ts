import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Module */
import {PromoterModule} from "./promoter.module";

/* Containers */
import * as promoterContainers from './containers';

/* Data */
import {RouteData} from "../navigation/models";

/* Routes */
export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [],
    component: promoterContainers.PromotersComponent,
    data: {
      title: 'Promoters - Party Control'
    } as RouteData,
  },
];

@NgModule({
  imports: [PromoterModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PromoterRoutingModule { }
