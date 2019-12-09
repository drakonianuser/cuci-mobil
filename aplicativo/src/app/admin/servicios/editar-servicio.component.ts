import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ParametrizacionService } from '../../services/parametrizacion.service'
import { DescuentoService } from '../../services/descuento.service';
import { TipoVehiculoService } from '../../services/tipo-vehiculo.service'
import { servicioVehiculoRegistrarEntradaService } from "../../services/servicio-vehiculo-registrar-entrada.service";
import { descuentos } from '../../models/descuentos'
import { servicios } from '../../models/servicios';
import { tipoVehiculo } from "../../models/tipoVehiculo";

import { servicioVehiculoRegistrarEntrada } from '../../models/servicioVehiculoRegistrarEntrada';


const SERVICIOS: servicioVehiculoRegistrarEntrada[] = [];


@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {
  DESCUENTO_SERVI: descuentos[] = [];
  TIPO_VEHICULO: tipoVehiculo[] = [];
  SERVICIOS: servicios[] = [];
  descuento: any = [];
  resultado = null;
  constructor(private router: Router, private ParametrizacionService: ParametrizacionService, private DescuentoService: DescuentoService, private servicioVehiculoRegistrarEntradaService: servicioVehiculoRegistrarEntradaService, private TipoVehiculoService: TipoVehiculoService) {
    this.getDecuentos()
    this.getTiposervicioVehiculo()
    this.getServicios()
  }

  displayedColumns: string[] = ['vehiculos', 'precio', 'select'];
  columns: string[] = ['numServicios', 'porcentageDes'];
  dataSource = new MatTableDataSource(SERVICIOS);
  data = new MatTableDataSource(this.DESCUENTO_SERVI);
  selection = new SelectionModel<servicioVehiculoRegistrarEntrada>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: servicioVehiculoRegistrarEntrada): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.VALOR + 1}`;
  }


  getDecuentos() {
    this.DescuentoService.getAll()
      .subscribe(
        res => {
          this.resultado = res;
          for (let index = 0; index < this.resultado.length; index++) {
            if (this.resultado[index].ACTIVO == 'S') {
              this.DESCUENTO_SERVI.push({
                ID_DESUENTO: this.resultado[index].ID_DESUENTO,
                PORSENTAJE_DESCUENTO: this.resultado[index].PORSENTAJE_DESCUENTO,
                CANTIDAD_SERVICIOS: this.resultado[index].CANTIDAD_SERVICIOS,
                FECHA_INICIO: this.resultado[index].FECHA_INICIO,
                FECHA_FIN: this.resultado[index].FECHA_FIN
              })
            }
          }
        }
      )
  }

  getTiposervicioVehiculo() {
    this.TipoVehiculoService.getAll()
      .subscribe(
        res => {
          this.resultado = res;
          for (let index = 0; index < this.resultado.length; index++) {
            this.TIPO_VEHICULO.push({
              ID_TIPO_VEHICULO: this.resultado[index].ID_TIPO_VEHICULO,
              NOMBRE: this.resultado[index].NOMBRE,
              ACTIVO: this.resultado[index].ACTIVO
            })
          }
        }
      )
  }

  getServicios() {
    this.ParametrizacionService.getServicios()
      .subscribe(
        res => {
          this.resultado = res;
          for (let index = 0; index < this.resultado.length; index++) {
            this.SERVICIOS.push({
              ID_SERVICIO: this.resultado[index].ID_SERVICIO,
              NOMBRE_SERVICIO: this.resultado[index].NOMBRE_SERVICIO,
              ACTIVO: this.resultado[index].ACTIVO
            })
          }
        }
      )
  }

  crearDescuento(descuento: descuentos) {
    this.ParametrizacionService.createDescuento(descuento)
      .subscribe(
        res => {
          this.getDecuentos()
        }
      )
  }

  updateDescuento(id:number , descuento:descuentos){
    this.ParametrizacionService.updateDescuento(id , descuento)
    .subscribe(
      res => {
        this.getDecuentos()
      }
    )
  }

  delecteDescuento(id:number){
    this.ParametrizacionService.deleteDescuento(id)
    .subscribe(
      res => {
        this.getDecuentos()
        
      }
    )
  }

  createServicios(servicio: servicios){
    this.ParametrizacionService.createServicio(servicio)
    .subscribe(
      res=> {
        this.getServicios()

      }
    )
  }

  updateServicios(id:number,servicio:servicios){
    this.ParametrizacionService.updateServicio(id,servicio)
    .subscribe(
      res=>{
        this.getServicios()
      }
    )
  }

  delecteServicio(id:number){
    this.ParametrizacionService.delecteServicio(id)
    .subscribe(
      res =>{
        this.getServicios()
      }
    )
  }

  createServicioVehiculo(ID_SERVICIO:number, ID_TIPO_VEHICULO:number, servicioVehiculoRegistrarEntrada: servicioVehiculoRegistrarEntrada){
    this.ParametrizacionService.createServicioVehiculo(ID_SERVICIO,ID_TIPO_VEHICULO, servicioVehiculoRegistrarEntrada)
    .subscribe(
      res => {
        this.getTiposervicioVehiculo()
      }
    )
  }
}