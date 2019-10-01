import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosIngresadosComponent } from './vehiculos-ingresados.component';

describe('PantallaInicioComponent', () => {
  let component: VehiculosIngresadosComponent;
  let fixture: ComponentFixture<VehiculosIngresadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosIngresadosComponent ]
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