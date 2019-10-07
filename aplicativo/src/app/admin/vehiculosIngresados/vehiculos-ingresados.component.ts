import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  placa: string;
  servicios: number;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    servicios: 4,
    placa: 'MMM123',
    estado: "pendiente",

  }, {
    servicios: 2,
    placa: 'JKL124',
    estado: "finalizado",
  }, {
    servicios: 3,
    placa: 'kkk340',
    estado: 'pendiente',
  },
];

@Component({
  selector: 'app-vehiculos-ingresados',
  templateUrl: './vehiculos-ingresados.component.html',
  styleUrls: ['./vehiculos-ingresados.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VehiculosIngresadosComponent implements OnInit {
  columnsToDisplay = ['placa', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expandedElement: PeriodicElement | null;
  selection = new SelectionModel<PeriodicElement>(true, []);

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
  
   
    checkboxLabel(row?: PeriodicElement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.placa+ 1}`;
    }
}

