import {Component, Inject, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EventDialogModel} from "../../../promoter/models";
import {Event, Promoter} from "../../../app-common/models";
import {MatSelectionList} from "@angular/material/list";

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent {
  title: string = '';
  todayDate:Date = new Date();
  listOfPromoters: Promoter[] = [];
  selectedPromoters: Promoter[] = [];
  event: Event;

  @ViewChild('promoters') promoterList: MatSelectionList;

  eventForm = new FormGroup({
    id: new FormControl(-1),
    name: new FormControl('', [Validators.required]),
    eventDate: new FormControl(this.todayDate),
    open: new FormControl(true),
  });

  constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EventDialogModel) {
    this.title = data.title;
    this.listOfPromoters = data.activePromoters;
    this.selectedPromoters = this.listOfPromoters.filter(
      promoter => { return data.event.promoters.find(
        select => {return promoter.id === select.promoter.id}
      )}
    );
    this.eventForm.setValue({
      id: data.event.id,
      name: data.event.name,
      eventDate: data.event.eventDate ? new Date(data.event.eventDate.toString() + 'T00:00:00'): this.todayDate,
      open: data.event.open
    });
    this.event = data.event;
  }

  submitForm(): void {
    if (this.eventForm.valid) {
      let event = {
        ...this.eventForm.value,
        vipTotal: this.event.vipTotal,
        freeLadiesTotal: this.event.freeLadiesTotal,
        totalGeneralAdmission: this.event.totalGeneralAdmission,
        totalOver21: this.event.totalOver21,
        promoters: this.promoterList.selectedOptions.selected.map(element => element.value.id)
      };
      this.dialogRef.close(event);
    }
  }
}
