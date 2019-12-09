import { Component, OnInit } from '@angular/core';
import { reportesServices } from '../services/reportes.service'
import { Fechas } from '../models/fechas'

@Component({
  selector: 'app-reporte',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class Reportes implements OnInit {

    fechas: Fechas = {
      fechaInicio: ''+' 00:00:00',    
      fechaFin: ''+' 23:59:59'
    }

  constructor(private reporService: reportesServices) { }

  

  ngOnInit() {  
  }

  reporte(){

    this.fechas.fechaInicio = this.fechas.fechaInicio + "00:00:00"
    this.fechas.fechaFin = this.fechas.fechaFin + "23:59:59"
    console.log(this.fechas)
    this.reporService.getNombre(1).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}