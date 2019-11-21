import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarServicioComponent } from './editar-servicio.component';
import {NavComponent} from '../../nav/nav.component';
import {MaterialModule} from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('edita-servicio', () => {
  let component: EditarServicioComponent;
  let fixture: ComponentFixture<EditarServicioComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ EditarServicioComponent,NavComponent  ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
