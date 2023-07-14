import { Component } from '@angular/core';
import {NavigationService} from "../../services";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public navigationService: NavigationService) {
  }
}
