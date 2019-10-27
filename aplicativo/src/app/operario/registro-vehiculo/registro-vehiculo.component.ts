import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {TipoVehiculoService} from '../../services/tipo-vehiculo.service';
import {VehiculoService} from '../../services/vehiculo.service';
import { vehiculo } from '../../models/vehiculo';
import {cliente} from '../../models/cliente';
import {clienteXVehiculo} from '../../models/clienteXVehiculo';
import {ClienteVehiculoService} from '../../services/cliente-vehiculo.service';
import {ClienteService} from '../../services/cliente.service';
@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnInit {
  selected = 1;
  stateCtrl:boolean = false;
  tipoVehiculos: any = [];
  vehiculObtenido = false;

  vehiculo: vehiculo = {
    ID_VEHICULO: 0,
    PLACA:'',
    ACTIVO: 'S',
    TIPO_VEHICULO_ID_TIPO_VEHICULO: 0,
    TIPO_ESTADO_ID_TIPO_ESTADO:1
  }

  cliente: cliente = {
    ID_CLIENTE: 0,
    NOMBRE: '',
    APELLIDOS: '',
    CEDULA: null,
    TELEFONO: null,
    ACTIVO: ''
  }



  vehiculoObtenido: any = [];
  clienteObtenido: any = [];

  constructor(private tipoVehiculoService: TipoVehiculoService, private VehiculoService: VehiculoService
    ,private clienteService: ClienteService,private clienteVehiculoService: ClienteVehiculoService) {
    this.tipoVehiculoService.getAll()
      .subscribe(
        res => {
          this.tipoVehiculos = res;
          console.log(this.tipoVehiculos)
          for(let vehiculo of this.tipoVehiculos){
            console.log(vehiculo.NOMBRE)
          }
        }
      )
   }

  ngOnInit() {
  }
  registrarVehiculo(){
    if(this.vehiculo.ID_VEHICULO==0){
      this.VehiculoService.createVehiculo(this.vehiculo)
      .subscribe(
        res =>{
          console.log(res)
        }
      )
    }

  }

  buscarVehiculo(){
    this.VehiculoService.getOneVehiculo(this.vehiculo.PLACA)
      .subscribe(
        res =>{
          this.vehiculoObtenido = res;
          this.vehiculo = this.vehiculoObtenido;
          this.vehiculObtenido = true;
        },
        err => {

        }
      )
  }
}
