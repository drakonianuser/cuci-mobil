import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportes } from './reportes.component';
import {NavComponent} from '../nav/nav.component'
import {MaterialModule} from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http'

describe('Reportes', () => {
  let component: Reportes;
  let fixture: ComponentFixture<Reportes>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reportes,NavComponent ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
