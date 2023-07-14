import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-money-value-picker',
  templateUrl: './money-value-picker.component.html',
  styleUrls: ['./money-value-picker.component.css']
})
export class MoneyValuePickerComponent {
  @Input() label: string = '';
  @Input() value: number = 0;
  @Output() clickUpEvent = new EventEmitter<number>();
  @Output() clickDownEvent = new EventEmitter<number>();

  onClickUp(amount: number) {
    this.clickUpEvent.emit(amount);
  }

  onClickDown(amount: number) {
    this.clickDownEvent.emit(amount);
  }
}
