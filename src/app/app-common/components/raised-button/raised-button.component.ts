import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.css']
})
export class RaisedButtonComponent {
  @Input() color: string = '';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Output() btnClickedEvent = new EventEmitter();

  onClicked() {
    this.btnClickedEvent.emit();
  }
}
