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
import {FacturaService} from '../../services/factura.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnInit {
  selected = 1;
  stateCtrl:boolean = false;
  dueno:boolean = false;
  tipoVehiculos: any = [];
  vehiculObtenido = false;
  clienteobtenido = false;
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
    ACTIVO: 'S'
  }

  clienteXVehiculo: clienteXVehiculo = {
    ID_CLIENTE_VEHICULO: 0,
    VEHICULO_ID_VEHICULO: 0,
    VEHICULO_TIPO_VEHICULO_ID_TIPO_VEHICULO: 0,
    CLIENTE_ID_CLIENTE: 0
  }

  datosFactura = {
    clienteID: 0,
    VehiculoID: 0,
    Placa: "",
    tipoVehiculo: 0
  }

  vehiculoObtenido: any = [];
  clienteObtenido: any = [];
  clientexVehiculo: any=[];
  constructor(private facturaService: FacturaService,private tipoVehiculoService: TipoVehiculoService, private VehiculoService: VehiculoService
    ,private clienteService: ClienteService,private clienteVehiculoService: ClienteVehiculoService, private router: Router) {
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
  almacenarDatosFactura(){
    this.datosFactura.VehiculoID = this.vehiculo.ID_VEHICULO;
    this.datosFactura.Placa = this.vehiculoObtenido.PLACA;
    this.datosFactura.clienteID = this.cliente.ID_CLIENTE;
    this.datosFactura.tipoVehiculo = this.vehiculo.TIPO_VEHICULO_ID_TIPO_VEHICULO;
    localStorage.setItem('datosFactura', JSON.stringify(this.datosFactura))
  }
  registrarVehiculo(){
    if(this.vehiculo.ID_VEHICULO==0){
      console.log("creo vehiculo")
      this.VehiculoService.createVehiculo(this.vehiculo)
      .subscribe(
        res =>{
          this.VehiculoService.getOneVehiculo(this.vehiculo.PLACA)
          .subscribe(
            res =>{
              console.log("Consulto el vehiculo")
              this.vehiculoObtenido = res;
              this.vehiculo = this.vehiculoObtenido;
              this.vehiculObtenido = true;
              if(this.cliente.ID_CLIENTE==0 && this.stateCtrl==true){
                this.crearCliente();
              }else if(this.dueno==true){
                this.crearClienteXVehiculo();
              }else{
                this.almacenarDatosFactura()
                this.router.navigateByUrl('/registrarEntrada')
              }
            },
            err => {
    
            }
          )
        }
      )
    }else if(this.cliente.ID_CLIENTE==0 && this.stateCtrl==true){
      this.crearCliente();
    }else if(this.dueno==true){
      this.crearClienteXVehiculo();
    }else{
      this.almacenarDatosFactura()
      this.router.navigateByUrl('/registrarEntrada')
    }


  }

  buscarVehiculo(){
    this.facturaService.getDisponible(this.vehiculo.PLACA)
      .subscribe(
        res=>{
          alert("El vehiculo se encuentra en la serviteca")
        },
        err=>{
          this.VehiculoService.getOneVehiculo(this.vehiculo.PLACA)
          .subscribe(
            res =>{
              this.vehiculoObtenido = res;
              this.vehiculo = this.vehiculoObtenido;
              this.vehiculObtenido = true;
            },
            err => {
              this.vehiculObtenido = false;
              this.vehiculo.ID_VEHICULO = 0;
            }
          )
        }
      )

  }

  buscarCliente(){
    console.log(""+this.stateCtrl)
    if(this.stateCtrl==true){
      this.clienteobtenido = false;
      this.cliente.ID_CLIENTE=0;
      this.cliente.CEDULA = null;
    }else{
      this.clienteService.getOneCliente(this.cliente.CEDULA)
      .subscribe(
        res=>{
          this.clienteObtenido = res;
          this.cliente = this.clienteObtenido;
          this.clienteobtenido = true; 
        }
      )
    }

  }

  crearCliente(){
    console.log(this.cliente.CEDULA)
    console.log("creo cliente")
    this.clienteService.createCliente(this.cliente)
    .subscribe(
      res =>{
        this.clienteService.getOneCliente(this.cliente.CEDULA)
        .subscribe(
          res=>{
            this.clienteObtenido = res;
            this.cliente = this.clienteObtenido;
            this.clienteobtenido = true;
            if(this.dueno==true){
              this.crearClienteXVehiculo();
            }else{
              this.almacenarDatosFactura();
              this.router.navigateByUrl('/registrarEntrada')
            }
          }
        )
      }
    )
  }

  crearClienteXVehiculo(){
    console.log("entro a crear cliente vehiculo")
    this.clienteXVehiculo.VEHICULO_ID_VEHICULO = this.vehiculo.ID_VEHICULO;
    this.clienteXVehiculo.CLIENTE_ID_CLIENTE = this.cliente.ID_CLIENTE;
    this.clienteXVehiculo.VEHICULO_TIPO_VEHICULO_ID_TIPO_VEHICULO = this.vehiculo.TIPO_VEHICULO_ID_TIPO_VEHICULO;
    this.clienteVehiculoService.getOneClienteVehiculo(this.vehiculo.ID_VEHICULO)
      .subscribe(
        res=>{
          this.clientexVehiculo = res;
          this.clienteXVehiculo.ID_CLIENTE_VEHICULO = this.clientexVehiculo.ID_CLIENTE_VEHICULO;
          if(this.clienteXVehiculo.CLIENTE_ID_CLIENTE !=this.cliente.ID_CLIENTE){
            this.clienteVehiculoService.updateClienteVehiculo(this.clienteXVehiculo.ID_CLIENTE_VEHICULO, this.clienteXVehiculo)
            .subscribe(
              res=>{
                this.almacenarDatosFactura();
                this.router.navigateByUrl('/registrarEntrada')

              }
            )
          }
          this.almacenarDatosFactura();
          this.router.navigateByUrl('/registrarEntrada')
        },
        err=>{
          console.log("entro")
          this.clienteVehiculoService.createClienteVehiculo(this.clienteXVehiculo)
            .subscribe(
              res=>{
                this.almacenarDatosFactura();
                this.router.navigateByUrl('/registrarEntrada')
              }
            )
        }
      )

  }
}
