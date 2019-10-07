import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface elemento {
  precio: number;
  servicios: string;
}

const ELEMENT_DATA: elemento[] = [
  {servicios: "servicio", precio: 1.2},
  {servicios: "servicio", precio: 12},
  {servicios: "servicio", precio: 12},
  {servicios: "servicio", precio: 12},
  {servicios: "servicio", precio: 1.2},
  {servicios: "servicio", precio: 1.2},
];

@Component({
  selector: 'app-registrar-entrada-serviteca',
  templateUrl: './registrar-entrada-serviteca.component.html',
  styleUrls: ['./registrar-entrada-serviteca.component.css']
})
export class RegistrarEntradaServitecaComponent implements OnInit{
  displayedColumns: string[] = ['servicios', 'precio', 'select'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
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
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.servicios+ 1}`;
    }
}
