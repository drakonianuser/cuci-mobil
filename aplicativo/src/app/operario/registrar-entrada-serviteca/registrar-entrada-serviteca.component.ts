import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {factura} from '../../models/factura';
import {FacturaService} from '../../services/factura.service'
import {DescuentoService} from '../../services/descuento.service';
import {DetalleFactura} from '../../models/detalleFactura';
import {DetalleFacturaService} from '../../services/detalle-factura.service';
import {Router} from '@angular/router';
import {servicioVehiculoRegistrarEntradaService} from '../../services/servicio-vehiculo-registrar-entrada.service';
export interface elemento {
  precio: number;
  servicios: string;
  id: number;
}

@Component({
  selector: 'app-registrar-entrada-serviteca',
  templateUrl: './registrar-entrada-serviteca.component.html',
  styleUrls: ['./registrar-entrada-serviteca.component.css']
})
export class RegistrarEntradaServitecaComponent implements OnInit{
  vehiculoObtenido: any = [];
  resultado: any=[];
  ELEMENT_DATA: elemento[] = [
  ];
  factura: factura = {
    ID_FACTURA: 0,
    CLIENTE_ID_CLIENTE: 0,
    TOTAL: "",
    TOTAL_NETO: "",
    TURNO: "",
    FECHA_ENTRADA: null,
    FECHA_SALIDA: null,
    ACTIVO: "",
    VEHICULO_ID_VEHICULO: 0,
    TIPO_ESTADO_ID_TIPO_ESTADO: 0,
    DESCUENTOS_ID_DESCUENTOS: 0
  }

  detalle: DetalleFactura ={
    FACTURA_ID_FACTURA: 0,
    ID_DETALLE_FACTURA: 0,
    SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO: 0
  }
  descuento: any=[];
  datosFactura: any=[];
  displayedColumns: string[] = ['servicios', 'precio', 'select'];
  dataSource = null;
  selection = null;
  facturaObtenida: any=[]
  precios = 0;
  encendidos = 0;
  IDdescuento = 0;
  numeroDescuento = "No Aplica";
  precioNeto = 0;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private router: Router,private DetalleFacturaService: DetalleFacturaService,private FacturaService: FacturaService,private DescuentoService: DescuentoService,private servicioVehiculoRegistrarEntradaService: servicioVehiculoRegistrarEntradaService) {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
    this.selection = new SelectionModel<elemento>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    var datosFactura = JSON.parse(localStorage.getItem('datosFactura'))
    this.datosFactura = datosFactura;
    this.factura.CLIENTE_ID_CLIENTE = this.datosFactura.clienteID;
    this.factura.VEHICULO_ID_VEHICULO = this.datosFactura.VehiculoID;
    this.factura.TIPO_ESTADO_ID_TIPO_ESTADO = 2;
    this.factura.ACTIVO = 'S';
    this.servicioVehiculoRegistrarEntradaService.getOneClienteVehiculo(datosFactura.tipoVehiculo)
    .subscribe(
      res => { 
        this.resultado = res;
        for (let index = 0; index < this.resultado.length; index++) {
          this.ELEMENT_DATA.push({
            servicios: this.resultado[index].NOMBRE_SERVICIO,
            precio: this.resultado[index].VALOR,
            id: this.resultado[index].ID_SERVICIOS_VEHICULO
          })
        }
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
        this.selection = new SelectionModel<elemento>(true, []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
    this.DescuentoService.getAll()
      .subscribe(
        res=>{
          this.descuento =res;
          console.log(res)
        }
      )
  }
 

  ngOnInit() {
    console.log()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    masterToggle() {
      this.precios=0;
      this.encendidos = 0;
      if(!this.isAllSelected()){
        for (let index = 0; index < this.resultado.length; index++) {
          this.precios = this.precios+this.resultado[index].VALOR;
          this.encendidos = this.encendidos+1;
        }
      }
      this.isAllSelected() ?
      
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
      this.calcularPrecio(this.precios, this.encendidos)
    }
  
   
    checkboxLabel(row?: elemento): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      } 
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.servicios+ 1}`;
    }

    registrarFactura(){
      this.factura.TOTAL = this.precios.toString();
      this.factura.TOTAL_NETO = this.calcularPrecio(this.precios, this.encendidos).toString();
      this.factura.DESCUENTOS_ID_DESCUENTOS = this.IDdescuento;
      var Dates = new Date();
      this.factura.TURNO = this.generarTurno(Dates)
      this.FacturaService.createFactura(this.factura)
        .subscribe(
          res=>{
            console.log(res)
            this.FacturaService.getOneFactura(Number.parseInt(this.factura.TURNO))
              .subscribe(
                res=>{
                  this.facturaObtenida = res;
                  this.asignarServicios()
                }
              )
          }
        )
      console.log(this.factura)
    }

    leer(row?: elemento){
      if(this.selection.isSelected(row)){
        this.precios = this.precios-row.precio;
        this.encendidos = this.encendidos-1;
      }else{
        this.precios = this.precios+row.precio;
        this.encendidos = this.encendidos+1
      }
      this.calcularPrecio(this.precios, this.encendidos)
    }

    calcularPrecio(precio: number, numero: number){
      var porcentajeDescuento = 0;
      this.descuento.forEach(descuento=>{
        if(numero >= descuento.CANTIDAD_SERVICIOS){
          this.IDdescuento = descuento.ID_DESCUENTOS;
          porcentajeDescuento = descuento.PORCENTAJE_DESCUENTO;
        }
      })
      if(porcentajeDescuento!=0){
        this.numeroDescuento = porcentajeDescuento.toString()+"%"
      }else{
        this.numeroDescuento = "No Aplica"
      }
      var descuento = porcentajeDescuento/100;
      descuento = descuento*precio;
      descuento = precio-descuento
      this.precioNeto = descuento;
      return descuento;
    }

    generarTurno(Dates: Date){
      var fecha = Dates.getFullYear()+""+Dates.getMonth()+""+Dates.getHours()+""+Dates.getMinutes()+""+Dates.getSeconds()
      return fecha
    }

    asignarServicios(){
      this.detalle.FACTURA_ID_FACTURA = this.facturaObtenida.ID_FACTURA
      this.dataSource.data.forEach(row=>{
        if(this.selection.isSelected(row)){
          console.log(this.selection.isSelected(row))
          console.log(row.id)
          this.detalle.SERVICIOS_VEHICULO_ID_SERVICIOS_VEHICULO = row.id;
          this.DetalleFacturaService.createDetalleFactura(this.detalle)
            .subscribe(
              res=>{
                console.log(res)
              } 
            )
        }
      })
      alert("Su turno es: "+this.factura.TURNO)
      this.router.navigateByUrl('/vehiculosIngresados')
    }
}
