import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacionComponent } from './liquidacion.component';
import {NavComponent} from '../../nav/nav.component'
import {MaterialModule} from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http'
describe('LiquidacionComponent', () => {
  let component: LiquidacionComponent;
  let fixture: ComponentFixture<LiquidacionComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('Turno', "20191020551")
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidacionComponent ,NavComponent],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
