import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MaterialModule } from "./material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { RegistroVehiculoComponent } from './operario/registro-vehiculo/registro-vehiculo.component';
import { RegistroUsuarioComponent } from './operario/registro-usuario/registro-usuario.component';
import { RegistrarEntradaServitecaComponent } from './operario/registrar-entrada-serviteca/registrar-entrada-serviteca.component';
import { LiquidacionComponent } from './operario/liquidacion/liquidacion.component';
import { NavComponent } from './nav/nav.component';
import { EditarVehiculoComponent } from './admin/vehiculo/editar-vehiculo.component';
import { EditarServicioComponent } from './admin/servicios/editar-servicio.component';
import { VehiculosIngresadosComponent } from './admin/vehiculosIngresados/vehiculos-ingresados.component';
import { Reportes } from './reportes/reportes.component';
import {RouterModule, Route} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: PantallaInicioComponent},
  {path: 'inicio/registrarEntrada', component: RegistrarEntradaServitecaComponent}, 
  {path: 'registroUsuario', component: RegistroUsuarioComponent},
  {path: 'registroVehiculo', component: RegistroVehiculoComponent},
  {path: 'nav', component: NavComponent},
  {path: 'editarVehiculo', component: EditarVehiculoComponent},
  {path: 'editarServicio', component: EditarServicioComponent},
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
    RegistroUsuarioComponent,
    RegistrarEntradaServitecaComponent,
    LiquidacionComponent,
    NavComponent,
    EditarVehiculoComponent,
    EditarServicioComponent,
    VehiculosIngresadosComponent,
    Reportes
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
