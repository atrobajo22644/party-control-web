import {Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public navigationService: NavigationService) {
  }

  toggleSideNav() {
    this.navigationService.toggleSideNav();
  }
}
