import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NavComponent} from '../../nav/nav.component'
import { RegistrarEntradaServitecaComponent } from './registrar-entrada-serviteca.component';
import {MaterialModule} from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrarEntradaServitecaComponent', () => {
  let component: RegistrarEntradaServitecaComponent;
  let fixture: ComponentFixture<RegistrarEntradaServitecaComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEntradaServitecaComponent,NavComponent ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule,BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let datosFactura = {
      VehiculoID: 1,
      Placa: "ABC123",
      clienteID: 3,
      tipoVehiculo: 1
    }
    localStorage.setItem('datosFactura', JSON.stringify(datosFactura))
    fixture = TestBed.createComponent(RegistrarEntradaServitecaComponent);
    component = fixture.componentInstance;
    component.descuento = [
      {id: 0, descuento: 0, cantidadServicios: 0},
      {id: 1, descuento: 10, cantidadServicios: 3}
    ]
    fixture.detectChanges();
  });

  it('Se crea el componente registrar-entrada', () => {
    expect(component).toBeTruthy();
  });
  it('Descuento de 2 servicios con un total de 47000', ()=>{
    let precio = component.calcularPrecio(47000, 2);
    let descuento = component.numeroDescuento;
    expect(precio).toBe(47000)
    expect(descuento).toBe('No Aplica') 
  })
  it('Descuento de 4 servicios con un total de 159000', ()=>{
    let precio = component.calcularPrecio(159000, 4);
    let descuento = component.numeroDescuento;
    expect(precio).toBe(143100);
    expect(descuento).toBe('10%')
  })
  it('Descuento de 3 servicios con un total de 58000', ()=>{
    let precio = component.calcularPrecio(58000, 3);
    let descuento = component.numeroDescuento;
    expect(precio).toBe(52200);
    expect(descuento).toBe('10%')
  })
  it('verificar la generación de turno de la fecha 2019/05/12 con hora 4:34:13', ()=>{
    let fecha = new Date(2019,5,12,4,34,13);
    let turno = component.generarTurno(fecha)
    expect(turno).toBe('2019543413')
  })
  it('verificar la generación de turno de la fecha 2019/12/01 con hora 23:12:07', ()=>{
    let fecha = new Date(2019,2,5,11,34,2);
    let turno = component.generarTurno(fecha)
    expect(turno).toBe('2019211342')
  })
});


