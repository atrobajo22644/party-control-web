import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EventService} from "../../services";
import {ApiResponse, Event, EventPage, NewEvent, Promoter, TableFilter, UpdateEvent} from "../../../app-common/models";
import {EventDialogComponent} from "../../components";
import {eventInitFilter} from "../../../app-common/models";
import {ConfirmDialogComponent} from "../../../app-common/components";
import {SharedService} from "../../../app-common/services";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  activePromoters: Promoter[] = [];
  pageNumber: number = 0;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(
    public dialog: MatDialog,
    public eventService: EventService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getActivePromoters().subscribe(
      promoters => this.activePromoters = promoters
    );
  }

  loadEvents(request: TableFilter): void {
    this.eventService.filterEvents(request.filter, request.sort, request.pageNumber, request.pageSize)
      .subscribe((page: EventPage) => {
        this.events = page.events;
        this.totalPages = page.totalPages;
        this.totalItems = page.totalItems;
        this.pageNumber = page.pageNumber;
      });
  }

  createEvent(event: UpdateEvent): void {
    this.eventService.createEvent(event)
      .subscribe((response: Event) => {
        if (response) {
          this.loadEvents(eventInitFilter);
        }
      });
  }

  updateEvent(event: UpdateEvent,id: number): void {
    //let updateEvent: UpdateEvent = {...event, vipTotal: 0, freeLadiesTotal: 0, totalOver21: 0, totalGeneralAdmission: 0};
    console.log('updateEvent: ', event);
    this.eventService.updateEvent(event, id)
      .subscribe((response: Event) => {
        if (response) {
          this.loadEvents(eventInitFilter);
        }
      });
  }

  deleteEvent(eventId: number): void {
    this.eventService.deleteEvent(eventId)
      .subscribe((response: ApiResponse) => {
        if (response.success) {
          this.loadEvents(eventInitFilter);
        } else {
          window.alert(response.message);
        }
      });
  }

  confirmDelete(event: Event): void {
    const message = `Are you sure you want to delete event: "${event.name}"?`;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {title: "Confirm deletion", message: message}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteEvent(event.id);
      }
    });
  }

  onAddClick() {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      maxWidth: "600px",
      data: {title: "Add event", event: {id: -1, name: '', eventDate: null, promoters: [], open: true}, activePromoters: this.activePromoters}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.createEvent(dialogResult);
      }
    });
  }

  onEditClick(event: Event) {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      maxWidth: "600px",
      data: {title: "Edit event", event: event, activePromoters: this.activePromoters}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.updateEvent(dialogResult, dialogResult.id);
      }
    });
  }

  onToggleOpen(event: Event) {
    event.open = !event.open;
    let newEvent: UpdateEvent = {...event, promoters: event.promoters.map(p => p.promoter.id)};
    this.updateEvent(newEvent, event.id);
  }

  onGetEventsEvent($event: TableFilter) {
    this.loadEvents($event);
  }
}
