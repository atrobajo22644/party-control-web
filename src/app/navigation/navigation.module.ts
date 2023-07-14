import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";

/* Modules */
import { AppCommonModule } from "../app-common/app-common.module";

/* Components */
import * as navigationComponents from "./components";

/* Containers */
import * as navigationContainers from './containers';

/* Layouts */
import * as appCommonLayouts from './layouts';

/* Services */
import * as navigationServices from "./services";

@NgModule({
    imports: [CommonModule, RouterModule, RouterLink, AppCommonModule],
  providers: [...navigationServices.services],
  declarations: [
    ...navigationContainers.containers,
    ...navigationComponents.components,
    ...appCommonLayouts.layouts,
  ],
  exports: [
    ...navigationContainers.containers,
    ...navigationComponents.components,
    ...appCommonLayouts.layouts,
  ]
})
export class NavigationModule { }
