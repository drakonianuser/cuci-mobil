import { Component, OnInit, ViewChild, NgZone  } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FacturaService} from '../../services/factura.service';
import {Router} from '@angular/router';
export interface PeriodicElement {
  placa: string;
  estado: string;
  turno: number;
}


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
  administrador=  false;

  ELEMENT_DATA: PeriodicElement[] = [

  ];
  resultado =null;
  columnsToDisplay = ['placa', 'estado'];
  dataSource = null;
  expandedElement: PeriodicElement | null;
  selection = null;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private NgZone:NgZone,private router: Router,private facturaService: FacturaService){
    localStorage.removeItem('datosFactura')

    var usuarioS = JSON.parse(localStorage.getItem('usuario'))
    if(usuarioS.USUARIO=="admin"){
      this.administrador = true;
    }
    this.facturaService.getAllFactura()
      .subscribe(
        res=>{
          this.resultado = res;
          for (let index = 0; index < this.resultado.length; index++) {
            var estados ="";
            switch (this.resultado[index].TIPO_ESTADO_ID_TIPO_ESTADO) {
              case 2:
                  estados = "En proceso"
                break;
              case 3:
                  estados = "Terminado"
              default:
                break;
            }
            this.ELEMENT_DATA.push({
              placa: "Placa: "+this.resultado[index].PLACA,
              estado: estados,
              turno: this.resultado[index].TURNO
            })
          }
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.selection = new SelectionModel<PeriodicElement>(true, []);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 
        err=>{

        }
      )

  }

  ngOnInit() {

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

    consultar(row?: PeriodicElement){
      console.log(row.placa)
      localStorage.setItem('Turno', row.turno.toString())
      this.router.navigateByUrl('/Liquidacion')
    }
    eliminar(row?: PeriodicElement){
      console.log(row.turno)
      this.facturaService.deleteFactura(row.turno.toString())
        .subscribe(
          res=>{
            this.NgZone.runOutsideAngular(() =>{
              location.reload();
            });
          }
        )
    }
}

