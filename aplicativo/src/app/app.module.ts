import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MaterialModule } from "./material.module";
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { RegistroVehiculoComponent } from './operario/registro-vehiculo/registro-vehiculo.component';
import { RegistrarEntradaServitecaComponent } from './operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component';
import { LiquidacionComponent } from './operario/liquidacion/liquidacion.component';
import { NavComponent } from './nav/nav.component';
import { EditarVehiculoComponent } from './admin/vehiculo/editar-vehiculo.component';
import { EditarServicioComponent } from './admin/servicios/editar-servicio.component';
import { VehiculosIngresadosComponent } from './admin/vehiculosIngresados/vehiculos-ingresados.component';
import { Reportes } from './reportes/reportes.component';
import {RouterModule, Route} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import {DetalleFacturaService} from './services/detalle-factura.service'
import {FacturaService} from './services/factura.service'
import {DescuentoService} from './services/descuento.service'
import {UsuariosService} from './services/usuarios.service'
import {TipoVehiculoService} from './services/tipo-vehiculo.service'
import { VehiculoService} from './services/vehiculo.service'
import {servicioVehiculoRegistrarEntradaService}from './services/servicio-vehiculo-registrar-entrada.service'
import { reportesServices } from './services/reportes.service'


import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { AddDescuentoDialogComponent } from './add-descuento-dialog/add-descuento-dialog.component';
import { AddServicesDialogComponent } from './add-services-dialog/add-services-dialog.component';
import { AddTipoVehiculoDialogComponent } from './add-tipo-vehiculo-dialog/add-tipo-vehiculo-dialog.component';
import { EditDescuentoDialogComponent } from './edit-descuento-dialog/edit-descuento-dialog.component';
import { EditServicioDialogComponent } from './edit-servicio-dialog/edit-servicio-dialog.component';
import { EditTipoVehiculoDialogComponent } from './edit-tipo-vehiculo-dialog/edit-tipo-vehiculo-dialog.component';
const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: PantallaInicioComponent},
  {path: 'registrarEntrada', component: RegistrarEntradaServitecaComponent}, 

  {path: 'registroVehiculo', component: RegistroVehiculoComponent},
  {path: 'nav', component: NavComponent},
  {path: 'vehiculo', component: EditarVehiculoComponent},
  {path: 'parametrizacion', component: EditarServicioComponent},
  {path: 'vehiculosIngresados', component: VehiculosIngresadosComponent},
  {path: 'Liquidacion', component: LiquidacionComponent},
  {path: 'Reportes', component: Reportes}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PantallaInicioComponent,
    RegistroVehiculoComponent,
    RegistrarEntradaServitecaComponent,
    LiquidacionComponent,
    EditarVehiculoComponent,
    EditarServicioComponent,
    VehiculosIngresadosComponent,
    Reportes,
    NavComponent,
    AddDescuentoDialogComponent,
    AddServicesDialogComponent,
    AddTipoVehiculoDialogComponent,
    EditDescuentoDialogComponent,
    EditServicioDialogComponent,
    EditTipoVehiculoDialogComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuariosService,
    TipoVehiculoService,
    VehiculoService,
    servicioVehiculoRegistrarEntradaService,
    DescuentoService,
    FacturaService,
    DetalleFacturaService,
    reportesServices
  ],
  entryComponents:[
    AddDescuentoDialogComponent,
    AddServicesDialogComponent,
    AddTipoVehiculoDialogComponent,
    EditDescuentoDialogComponent,
    EditServicioDialogComponent,
    EditTipoVehiculoDialogComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
