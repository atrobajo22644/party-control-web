import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/* Modules */
import {AppCommonModule} from "../app-common/app-common.module";
import {NavigationModule} from "../navigation/navigation.module";

/* Components */
import * as eventComponents from './components';

/* Containers */
import * as eventContainers from './containers';

/* Services */
import * as eventServices from './services';
import { EventDetailComponent } from './containers/event-detail/event-detail.component';

@NgModule({
  imports: [CommonModule, RouterModule, AppCommonModule, NavigationModule, ReactiveFormsModule, FormsModule],
  providers: [
    ...eventServices.services
  ],
  declarations: [
    ...eventContainers.containers,
    ...eventComponents.components,
    EventDetailComponent
  ],
  exports: [...eventContainers.containers, ...eventComponents.components],
})
export class EventModule { }
