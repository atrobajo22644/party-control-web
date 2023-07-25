import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-current-event-totals',
  templateUrl: './current-event-totals.component.html',
  styleUrls: ['./current-event-totals.component.css']
})
export class CurrentEventTotalsComponent {
  @Input() totalGeneralAdmission: number;
  @Input() totalOver21: number;
  @Output() btnSaveClicked = new EventEmitter();

  expanded: boolean = false;

  submitForm() {
    this.btnSaveClicked.emit({
      totalGeneralAdmission: this.totalGeneralAdmission,
      totalOver21: this.totalOver21
    });
    this.expanded = false;
  }
}
