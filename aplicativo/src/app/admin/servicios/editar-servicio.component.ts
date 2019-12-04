import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface elemento {
  precio: number;
  vehiculos: string;
}

const ELEMENT_DATA: elemento[] = [
  {vehiculos: "vehiculos", precio: 1.2},
  {vehiculos: "vehiculos", precio: 12},
  {vehiculos: "vehiculos", precio: 12},
  {vehiculos: "vehiculos", precio: 12},
  {vehiculos: "vehiculos", precio: 1.2},
  {vehiculos: "vehiculos", precio: 1.2},
];

export interface descuento {
  numServicios: number;
  porcentageDes: number;
}

const DESCUENTO_SERVI: descuento[] = [
  {numServicios: 1, porcentageDes: 1.2},
  {numServicios: 4, porcentageDes: 12},
  {numServicios: 3, porcentageDes: 12},
  {numServicios: 5, porcentageDes: 12},

];

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {

  displayedColumns: string[] = ['vehiculos', 'precio', 'select'];
  columns: string[] = ['numServicios', 'porcentageDes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource(DESCUENTO_SERVI);
  selection = new SelectionModel<elemento>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
  
   
    checkboxLabel(row?: elemento): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.vehiculos+ 1}`;
    }
}