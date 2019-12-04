import { Component, OnInit } from '@angular/core';
import {FacturaService} from '../../services/factura.service';
import {DetalleFacturaService} from '../../services/detalle-factura.service';
import {Router} from '@angular/router';
import {facturaUpdate} from '../../models/facturaUpdate'
export interface Factura {
  NR: number;
  Nombre: string;
  precio: number;
}

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})


export class LiquidacionComponent implements OnInit {
DataElement: Factura[] = [
];
  displayedColumns = [];
  dataSource = null;
  descuento = null;
  factura: any=[];
  fecha = null;
  resultado = null;
  services = null;
  totalCost = null;
  facturaUpdate: facturaUpdate = {
    TIPO_ESTADO_ID_TIPO_ESTADO: 0,
  }
  constructor(private router: Router,private DetalleFacturaService: DetalleFacturaService,private facturaService: FacturaService) {
    var Turno = localStorage.getItem('Turno')
    facturaService.getOneFactura(Number.parseInt(Turno))
      .subscribe(
        res=>{
          this.factura = res;
          if(this.factura.ID_DESCUENTOS==0){
            this.descuento=" No Aplica"
          }else{
            this.descuento=this.factura.PORCENTAJE_DESCUENTO
          }
          var date = new Date(this.factura.FECHA_ENTRADA);
          this.fecha = date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" - "+date.getHours()+":"+date.getMinutes()
          DetalleFacturaService.getAll(Number.parseInt(this.factura.ID_FACTURA))
            .subscribe(
              res=>{
                this.resultado = res;
                for (let index = 0; index < this.resultado.length; index++) {
                  this.DataElement.push({
                    NR: index+1,
                    Nombre: this.resultado[index].NOMBRE_SERVICIO,
                    precio: this.resultado[index].VALOR
                  })
                }
                this.displayedColumns = ['NR', 'Nombre', 'precio'];
                this.dataSource= this.DataElement
                this.services = this.getServices()
                this.totalCost = this.getTotalCost()
              }
            )
        }
      )
    

  }

  ngOnInit() {
    
  }

  public getServices()  {
    return this.dataSource.map(t => t.NR).length;
  }

  getTotalCost() {
    return this.dataSource.map(t => t.precio).reduce((acc, value) => acc + value, 0);
  }

  actualizarFactura(numero: number){
    var texto;
    if(numero == 3){
      texto= "¿Los servicios que se ofrecen al vehiculo han terminado?"
    }else if(numero ==4){
      texto= "¿Desea liquidar la factura?"
    }
    var mensaje = confirm(texto)
    if(mensaje){
      this.facturaUpdate.TIPO_ESTADO_ID_TIPO_ESTADO = numero
      this.facturaService.updateFactura(this.factura.ID_FACTURA, this.facturaUpdate)
        .subscribe(
          res=>{
            this.router.navigateByUrl('/vehiculosIngresados')
          }
        )
    }

  }
}
