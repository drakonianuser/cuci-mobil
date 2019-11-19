import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {NavComponent} from '../nav/nav.component'
import {MaterialModule} from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,NavComponent ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule,FormsModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.borrar = 2;
    component.usuario.USUARIO = "admin";
    component.usuario.PASSWORD = "admin";
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
  it('se logea en el sistema',()=>{
    let var1 = component.login();
    let var2 = 'Se logea'; 
    expect(var1).toEqual(var2);
  });
}); 
