import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {MaterialModule} from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http'
describe('nav', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin", 
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
