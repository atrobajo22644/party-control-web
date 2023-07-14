import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-number-value-picker',
  templateUrl: './number-value-picker.component.html',
  styleUrls: ['./number-value-picker.component.css']
})
export class NumberValuePickerComponent {
  @Input() label: string = '';
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Output() clickUpEvent = new EventEmitter();
  @Output() clickDownEvent = new EventEmitter();

  onClickUp() {
    this.clickUpEvent.emit();
  }

  onClickDown() {
    this.clickDownEvent.emit();
  }
}
