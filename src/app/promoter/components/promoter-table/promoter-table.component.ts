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
import {Promoter, TableFilter} from "../../../app-common/models";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {debounceTime, distinctUntilChanged, fromEvent, merge, Observable, tap} from "rxjs";

const ELEMENT_DATA: Promoter[] = [];

@Component({
  selector: 'app-promoter-table',
  templateUrl: './promoter-table.component.html',
  styleUrls: ['./promoter-table.component.css']
})
export class PromoterTableComponent implements AfterViewInit, AfterViewChecked {
  displayedColumns: string[] = ['id', 'name', 'active', 'actions'];
  dataSource: MatTableDataSource<Promoter>;
  value = '';

  @Input() set _promoters(val: Promoter[]) {
    this.dataSource = new MatTableDataSource(val);
    this.dataSource._updateChangeSubscription();
  }
  @Input() pageNumber: number = 0;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 0;
  @Input() loading$: Observable<boolean>;

  @Output() deletePromoterEvent= new EventEmitter<Promoter>();
  @Output() editPromoterEvent= new EventEmitter<Promoter>();
  @Output() toggleActiveEvent= new EventEmitter<Promoter>();
  @Output() getPromotersEvent= new EventEmitter<TableFilter>();

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadPromotersPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadPromotersPage())
      )
      .subscribe();

    this.loadPromotersPage();
  }

  clickDelete(promoter: Promoter): void {
    this.deletePromoterEvent.emit(promoter);
  }

  clickEdit(promoter: Promoter): void {
    this.editPromoterEvent.emit(promoter);
  }

  toggleActive(promoter: Promoter): void {
    this.toggleActiveEvent.emit(promoter);
  }

  clearFilter(): void {
    this.value = '';
    this.loadPromotersPage();
  }

  loadPromotersPage() {
    this.getPromotersEvent.emit({
      filter: this.value,
      sort: `${this.sort.active},${this.sort.direction}`,
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
    });
  }
}
