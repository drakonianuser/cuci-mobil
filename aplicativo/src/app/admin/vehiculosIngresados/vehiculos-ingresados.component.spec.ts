import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosIngresadosComponent } from './vehiculos-ingresados.component';
import {NavComponent} from '../../nav/nav.component';
import {MaterialModule} from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('vehiculos-ingresados', () => {
  let component: VehiculosIngresadosComponent;
  let fixture: ComponentFixture<VehiculosIngresadosComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosIngresadosComponent,NavComponent ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosIngresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});