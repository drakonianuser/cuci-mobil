import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {servicioVehiculoRegistrarEntradaService} from '../../services/servicio-vehiculo-registrar-entrada.service'
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
  elemento: elemento = {
    servicios: "servicio",
    precio: 3,
    id: 2
  }
  resultado: any=[];
  ELEMENT_DATA: elemento[] = [

  ];
  displayedColumns: string[] = ['servicios', 'precio', 'select'];
  dataSource = null;
  selection = null;
  precios = 0;
  encendidos = 0;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private servicioVehiculoRegistrarEntradaService: servicioVehiculoRegistrarEntradaService) {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
    this.selection = new SelectionModel<elemento>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.servicioVehiculoRegistrarEntradaService.getOneClienteVehiculo(1)
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
    }
  
   
    checkboxLabel(row?: elemento): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      } 
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.servicios+ 1}`;
    }

    comprobar(){
      this.dataSource.data.forEach(row=>{
        console.log(row.precio)
        console.log(this.selection.isSelected(row))
        console.log(row.id)
      })
    }

    leer(row?: elemento){
      if(this.selection.isSelected(row)){
        this.precios = this.precios-row.precio;
        this.encendidos = this.encendidos-1;
      }else{
        this.precios = this.precios+row.precio;
        this.encendidos = this.encendidos+1
      }
    }
}
