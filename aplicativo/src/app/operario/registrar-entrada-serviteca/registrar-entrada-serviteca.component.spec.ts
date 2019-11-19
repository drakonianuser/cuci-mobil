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
      Placa: "NRA",
      clienteID: 3,
      tipoVehiculo: 1
    }
    localStorage.setItem('datosFactura', JSON.stringify(datosFactura))
    fixture = TestBed.createComponent(RegistrarEntradaServitecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
