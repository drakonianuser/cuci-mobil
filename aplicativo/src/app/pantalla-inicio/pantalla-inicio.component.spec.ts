import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MaterialModule} from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PantallaInicioComponent } from './pantalla-inicio.component';
import {NavComponent} from '../nav/nav.component'
describe('PantallaInicioComponent', () => {
  let component: PantallaInicioComponent;
  let fixture: ComponentFixture<PantallaInicioComponent>;
  let usuario = {
    idUSUARIOS: null,
    USUARIO: "admin",
    PASSWORD: "admin"
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaInicioComponent,NavComponent],
      imports: [MaterialModule,RouterTestingModule],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(PantallaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
