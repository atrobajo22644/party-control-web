import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

/* Modules */
import {AppCommonModule} from "../app-common/app-common.module";
import {NavigationModule} from "../navigation/navigation.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/* Components */
import * as promoterComponents from './components';

/* Containers */
import * as promoterContainers from './containers';

/* Services */
import * as promoterServices from './services';

@NgModule({
  imports: [CommonModule, RouterModule, AppCommonModule, NavigationModule, ReactiveFormsModule, FormsModule],
  providers: [
    ...promoterServices.services
  ],
  declarations: [
    ...promoterContainers.containers,
    ...promoterComponents.components
  ],
  exports: [...promoterContainers.containers, ...promoterComponents.components],
})
export class PromoterModule { }
