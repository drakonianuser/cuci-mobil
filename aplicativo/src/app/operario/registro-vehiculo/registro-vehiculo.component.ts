import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnInit {
  stateCtrl:boolean = false
  vehiculos = [];
  constructor() {
    this.vehiculos=[
      {
        name:"moto",
        value:1
      },
      {
        name:"carro",
        value:2
      }
    ]
   }

  ngOnInit() {
  }

}
