import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { descuentos } from '../models/descuentos';
import { ParametrizacionService } from "../services/parametrizacion.service";

@Component({
  selector: 'app-add-descuento-dialog',
  templateUrl: './add-descuento-dialog.component.html',
  styleUrls: ['./add-descuento-dialog.component.css']
})
export class AddDescuentoDialogComponent {
    descuneto: descuentos
  constructor(
    public dialogRef: MatDialogRef<AddDescuentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public descuento: descuentos, private parametrizacionService: ParametrizacionService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDescuento():void{

    this.parametrizacionService.createDescuento(this.descuento)
      .subscribe(
        res => {
          alert(res)
        }
      )
  }
}
