import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import {AppCommonModule} from "../app-common/app-common.module";
import {NavigationModule} from "../navigation/navigation.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/* Components */
import * as currentEventComponents from './components';

/* Containers */
import * as currentEventContainers from './containers';

/* Services */
import * as currentEventServices from './services';

@NgModule({
  imports: [CommonModule, AppCommonModule, NavigationModule, ReactiveFormsModule, FormsModule],
  providers: [
    ...currentEventServices.services
  ],
  declarations: [
    ...currentEventContainers.containers,
    ...currentEventComponents.components
  ],
  exports: [...currentEventContainers.containers, ...currentEventComponents.components],
})
export class CurrentEventModule { }
