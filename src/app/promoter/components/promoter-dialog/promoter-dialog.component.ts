import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PromoterDialogModel} from "../../models";

@Component({
  selector: 'app-promoter-dialog',
  templateUrl: './promoter-dialog.component.html',
  styleUrls: ['./promoter-dialog.component.css']
})
export class PromoterDialogComponent {
  title: string;
  promoterForm = new FormGroup({
    id: new FormControl(-1),
    name: new FormControl('', [Validators.required]),
    active: new FormControl(true),
  });

  constructor(public dialogRef: MatDialogRef<PromoterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PromoterDialogModel) {
    this.title = data.title;
    this.promoterForm.setValue({
      id: data.promoter.id,
      name: data.promoter.name,
      active: data.promoter.active
    });
  }

  submitForm(): void {
    if (this.promoterForm.valid)
      this.dialogRef.close(this.promoterForm.value);
  }
}
