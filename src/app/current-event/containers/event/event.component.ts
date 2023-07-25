import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../app-common/services";
import {Event, EventPromoter, EventTotals, initEvent, UpdateEvent} from "../../../app-common/models";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event: Event = initEvent;
  freePromotersLadies = 0;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.getLastOpenedEvent()
      .subscribe((event: Event) => {
        this.event = event;
        this.calculateTotals();
      });
  }

  onUpdateEventPromoter($event: EventPromoter) {
    this.sharedService.updateEventPromoter(this.event.id, $event)
      .subscribe((event: Event) => {
        this.event = event;
        this.calculateTotals();
      })
  }

  updateEvent() {
    let updateEvent: UpdateEvent = {...this.event, promoters: this.event.promoters.map(p => p.promoter.id)};
    this.sharedService.updateEvent(this.event.id, updateEvent)
      .subscribe((event: Event) => {
        this.event = event;
        this.calculateTotals();
      })
  }

  onClickUpLadies() {
    this.event.freeLadiesTotal += 1;
    this.updateEvent();
  }

  onClickDownLadies() {
    if (this.event.freeLadiesTotal > 0) {
      this.event.freeLadiesTotal -= 1;
      this.updateEvent();
    }
  }

  onClickUpVip() {
    this.event.vipTotal += 1;
    this.updateEvent();
  }

  onClickDownVip() {
    if (this.event.vipTotal > 0) {
      this.event.vipTotal -= 1;
      this.updateEvent();
    }
  }

  calculateTotals = () => {
    this.freePromotersLadies = this.event.promoters.reduce((acu: number, value: EventPromoter) => acu + value.freeLadies, 0);
  }

  onSaveTotals($event: EventTotals) {
    this.event.totalGeneralAdmission = $event.totalGeneralAdmission;
    this.event.totalOver21 = $event.totalOver21;
    this.updateEvent();
  }
}
