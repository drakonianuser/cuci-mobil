import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  links = [];
  activeLink = this.links[0];

  background = 'primary';

  constructor() { 
    this.links =[
      {
        name:"Registrar entrada",
        path:"/registroVehiculo"

      },
      {
        name:"Parametrización",
        path:"/editarServicio"
      },
      {
        name:"Turnos",
        path:"/vehiculosIngresados"
      },
      {
        name:"Generar reporte",
        path:"/Reportes"
      },
      {
        name:"Cerrar sesión",
        path:"/"
      },
    ]
  }

  ngOnInit() {
  }

}