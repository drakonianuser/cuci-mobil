import { Component, OnInit, NgModule } from '@angular/core';
import {NavComponent} from '../nav/nav.component'
@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css']
})
@NgModule({
  imports: [NavComponent]
})
export class PantallaInicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("titulo","hola");
  }

}
