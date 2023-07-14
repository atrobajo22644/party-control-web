import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Event as PartyEvent, TableFilter} from "../../../app-common/models";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {debounceTime, distinctUntilChanged, fromEvent, merge, Observable, tap} from "rxjs";

const ELEMENT_DATA: PartyEvent[] = [];

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements AfterViewInit, AfterViewChecked {
  displayedColumns: string[] = ['id', 'name', 'eventDate', 'open', 'actions'];
  dataSource: MatTableDataSource<PartyEvent>;
  value = '';

  @Input() set _events(val: PartyEvent[]) {
    this.dataSource = new MatTableDataSource(val);
    this.dataSource._updateChangeSubscription();
  }
  @Input() pageNumber: number = 0;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 0;
  @Input() loading$: Observable<boolean>;

  @Output() deleteEventEvent= new EventEmitter<PartyEvent>();
  @Output() editEventEvent= new EventEmitter<PartyEvent>();
  @Output() toggleOpenEvent= new EventEmitter<PartyEvent>();
  @Output() getEventsEvent= new EventEmitter<TableFilter>();

  @ViewChild('input') input: ElementRef;
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) set _paginator(paginator: MatPaginator) {
    this.paginator = paginator;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadEventsPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadEventsPage())
      )
      .subscribe();

    this.loadEventsPage();
  }

  clickDelete(event: PartyEvent): void {
    this.deleteEventEvent.emit(event);
  }

  clickEdit(event: PartyEvent): void {
    this.editEventEvent.emit(event);
  }

  toggleOpen(event: PartyEvent): void {
    this.toggleOpenEvent.emit(event);
  }

  clearFilter(): void {
    this.value = '';
    this.loadEventsPage();
  }

  loadEventsPage() {
    this.getEventsEvent.emit({
      filter: this.value,
      sort: `${this.sort.active},${this.sort.direction}`,
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
    });
  }
}
