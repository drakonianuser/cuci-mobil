import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit {
    displayedColumns = [];
    dataSource = [
      {posicion:1,nombre:"lavado",precio:"$10.000"}
    ]
  constructor() {
   this.displayedColumns = ['NR','Nombre','precio'];
   this.dataSource 
   }

  ngOnInit() {
  }

}
