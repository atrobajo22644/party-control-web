import {Component} from '@angular/core';
import {NavigationService} from "../../services";
import {sideNavItems, sideNavSections} from "../../data";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
})
export class PageLayoutComponent {
  sideNavItems = sideNavItems;
  sideNavSections = sideNavSections;
  constructor(public navigationService: NavigationService) {
  }
}
