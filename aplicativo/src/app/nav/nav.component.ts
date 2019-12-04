import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  links = [];
  activeLink = this.links[0];

  background = 'primary';

  constructor(private router: Router) {
    var usuarioS = JSON.parse(localStorage.getItem('usuario'))
    if(usuarioS==null){
      this.router.navigateByUrl('/')
    }
    if (usuarioS.USUARIO == 'admin') {
      this.links = [
        { name: 'Registrar entrada', path: '/registroVehiculo' },
        { name: 'Parametrización', path: '/editarServicio' },
        { name: 'Turnos', path: '/vehiculosIngresados' },
        { name: 'Generar reporte', path: '/Reportes' },
        { name: 'Cerrar sesión', path: '/' }
      ];
    } else if(usuarioS.USUARIO == 'operario'){
      this.links = [
        { name: 'Registrar entrada', path: '/registroVehiculo' },
        { name: 'Turnos', path: '/vehiculosIngresados' },
        { name: 'Generar reporte', path: '/Reportes' },
        { name: 'Cerrar sesión', path: '/' }
      ];
    }
  }

  ngOnInit() {
  }
}
