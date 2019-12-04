import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroVehiculoComponent } from './registro-vehiculo.component';
import {NavComponent} from '../../nav/nav.component'
import {MaterialModule} from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistroVehiculoComponent', () => {
  let component: RegistroVehiculoComponent;
  let fixture: ComponentFixture<RegistroVehiculoComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVehiculoComponent,NavComponent],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule,FormsModule, BrowserAnimationsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
