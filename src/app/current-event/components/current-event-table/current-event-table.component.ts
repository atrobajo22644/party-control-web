import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EventPromoter} from "../../../app-common/models";
import {Observable} from "rxjs";

const ELEMENT_DATA: EventPromoter[] = [];

@Component({
  selector: 'app-current-event-table',
  templateUrl: './current-event-table.component.html',
  styleUrls: ['./current-event-table.component.css']
})
export class CurrentEventTableComponent {
  displayedColumns: string[] = ['name', 'ladies', 'gentlemen', 'free-ladies', 'vip', 'paid'];
  dataSource: MatTableDataSource<EventPromoter>;

  totalLadies: number = 0;
  totalGentlemen: number = 0;
  totalFreeLadies: number = 0;
  totalVip: number = 0;

  @Input() set _promoters(val: EventPromoter[]) {
    this.dataSource = new MatTableDataSource(val);
    this.dataSource._updateChangeSubscription();
    this.totalLadies = this.dataSource.data.reduce((acu: number, value: EventPromoter) => acu + value.ladies, 0);
    this.totalGentlemen = this.dataSource.data.reduce((acu: number, value: EventPromoter) => acu + value.guys, 0);
    this.totalFreeLadies = this.dataSource.data.reduce((acu: number, value: EventPromoter) => acu + value.freeLadies, 0);
    this.totalVip = this.dataSource.data.reduce((acu: number, value: EventPromoter) => acu + value.vip, 0);
  }
  @Input() loading$: Observable<boolean>;
  @Output() updateEventPromoter= new EventEmitter<EventPromoter>();

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  togglePaid(event: EventPromoter): void {
    event.paid = !event.paid;
    this.updateEventPromoter.emit(event);
  }

  countLadiesDown(element: EventPromoter) {
    element.ladies -= 1;
    this.totalLadies -= 1;
    this.updateEventPromoter.emit(element);
  }

  countLadiesUp(element: EventPromoter) {
    element.ladies += 1;
    this.totalLadies += 1;
    this.updateEventPromoter.emit(element);
  }

  countGentlemenDown(element: EventPromoter) {
    element.guys -= 1;
    this.totalGentlemen -= 1;
    this.updateEventPromoter.emit(element);
  }

  countGentlemenUp(element: EventPromoter) {
    element.guys += 1;
    this.totalGentlemen += 1;
    this.updateEventPromoter.emit(element);
  }

  countFreeLadiesDown(element: EventPromoter) {
    element.freeLadies -= 1;
    this.totalFreeLadies -= 1;
    this.updateEventPromoter.emit(element);
  }

  countFreeLadiesUp(element: EventPromoter) {
    element.freeLadies += 1;
    this.totalFreeLadies += 1;
    this.updateEventPromoter.emit(element);
  }

  countVipDown50(element: EventPromoter) {
    let value = element.vip - 50;
    element.vip = value < 0 ? 0 : value;
    this.totalVip -= 50;
    this.updateEventPromoter.emit(element);
  }

  countVipDown100(element: EventPromoter) {
    let value = element.vip - 100;
    element.vip = value < 0 ? 0 : value;
    this.totalVip -= value < 0 ? 50 : 100;
    this.updateEventPromoter.emit(element);
  }

  countVipUp50(element: EventPromoter) {
    element.vip += 50;
    this.totalVip += 50;
    this.updateEventPromoter.emit(element);
  }

  countVipUp100(element: EventPromoter) {
    element.vip += 100;
    this.totalVip += 100;
    this.updateEventPromoter.emit(element);
  }
}
