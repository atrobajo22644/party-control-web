import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

/* Angular Material */
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from "@angular/material/expansion";

const angularMaterial = [MatTooltipModule, MatButtonModule, MatIconModule, MatDividerModule,
  MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatInputModule, MatTableModule, MatSortModule,
  MatDialogModule, MatCheckboxModule, MatSlideToggleModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule];

/* Containers */
import * as appCommonContainers from './containers';

/* Components */
import * as appCommonComponents from './components';

/* Models */
//import * as models from './models';

/* Services */
import * as appCommonServices from './services';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, ...angularMaterial],
  providers: [...appCommonServices.services],
  declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
    exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...angularMaterial],
})
export class AppCommonModule { }
