import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { descuentos } from '../models/descuentos';

@Component({
  selector: 'app-add-descuento-dialog',
  templateUrl: './add-descuento-dialog.component.html',
  styleUrls: ['./add-descuento-dialog.component.css']
})
export class AddDescuentoDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<AddDescuentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: descuentos) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
