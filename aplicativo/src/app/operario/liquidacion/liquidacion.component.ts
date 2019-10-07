import { Component, OnInit } from '@angular/core';
export interface factura{
  NR:String,
  Nombre:String,
  precio: number
}

const DataElement: factura[] =[
  {
    NR:"1",
    Nombre:"lavado",
    precio:10.000
  },
  {
    NR:"2",
    Nombre:"Cambio Aceite",
    precio:10.000
  },
  {
    NR:"3",
    Nombre:"revision tecnica",
    precio:10.000
  },
  {
    NR:"4",
    Nombre:"cambio llantas",
    precio:10.000
  },
  {
    NR:"5",
    Nombre:"llantas",
    precio:10.000
  }
];
@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})


export class LiquidacionComponent implements OnInit {
    displayedColumns = [];
    dataSource = DataElement
  constructor() {
   this.displayedColumns = ['NR','Nombre','precio'];
   this.dataSource 
   }

  ngOnInit() {
  }

  getTotalCost() {
    return this.dataSource.map(t => t.precio).reduce((acc, value) => acc + value, 0);
  }
}
