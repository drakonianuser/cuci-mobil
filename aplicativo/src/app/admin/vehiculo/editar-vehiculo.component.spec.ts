import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarVehiculoComponent } from './editar-vehiculo.component';
import {NavComponent} from '../../nav/nav.component'
import {MaterialModule} from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('editar-vehiculo', () => {
  let component: EditarVehiculoComponent;
  let fixture: ComponentFixture<EditarVehiculoComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin" 
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVehiculoComponent,NavComponent ],
      imports: [MaterialModule,RouterTestingModule,HttpClientModule,BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
