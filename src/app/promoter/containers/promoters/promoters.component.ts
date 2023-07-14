import {Component} from '@angular/core';
import {PromoterService} from "../../services";
import {ApiResponse, Promoter, TableFilter, PromoterPage} from "../../../app-common/models";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../app-common/components";
import {PromoterDialogComponent} from "../../components";
import {promoterInitFilter} from "../../../app-common/models";

@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.css']
})
export class PromotersComponent {
  promoters: Promoter[] = [];
  pageNumber: number = 0;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(public dialog: MatDialog, public promoterService: PromoterService) { }

  loadPromoters(request: TableFilter): void {
    this.promoterService.filterPromoters(request.filter, request.sort, request.pageNumber, request.pageSize)
      .subscribe((page: PromoterPage) => {
        this.promoters = page.promoters;
        this.totalPages = page.totalPages;
        this.totalItems = page.totalItems;
        this.pageNumber = page.pageNumber;
      });
  }

  createPromoter(promoter: Promoter): void {
    this.promoterService.createPromoter(promoter)
      .subscribe((response: Promoter) => {
        if (response) {
          this.loadPromoters(promoterInitFilter);
        }
      });
  }

  updatePromoter(promoter: Promoter): void {
    this.promoterService.updatePromoter(promoter)
      .subscribe((response: Promoter) => {
        if (response) {
          this.loadPromoters(promoterInitFilter);
        }
      });
  }

  deletePromoter(promoterId: number): void {
    this.promoterService.deletePromoter(promoterId)
      .subscribe((response: ApiResponse) => {
        if (response.success) {
          this.loadPromoters(promoterInitFilter);
        } else {
          window.alert(response.message);
        }
      });
  }

  confirmDelete(promoter: Promoter): void {
    const message = `Are you sure you want to delete promoter: "${promoter.name}"?`;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {title: "Confirm deletion", message: message}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deletePromoter(promoter.id);
      }
    });
  }

  onAddClick() {
    const dialogRef = this.dialog.open(PromoterDialogComponent, {
      maxWidth: "600px",
      data: {title: "Add promoter", promoter: {id: -1, name: '', active: true}}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.createPromoter(dialogResult);
      }
    });
  }

  onEditClick(promoter: Promoter) {
    const dialogRef = this.dialog.open(PromoterDialogComponent, {
      maxWidth: "600px",
      data: {title: "Edit promoter", promoter: promoter}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        console.log('dialogResult: ', dialogResult);
        this.updatePromoter(dialogResult);
      }
    });
  }

  onToggleActive(promoter: Promoter) {
    promoter.active = !promoter.active;
    this.updatePromoter(promoter);
  }

  onGetPromotersEvent($event: TableFilter) {
    this.loadPromoters($event);
  }
}
