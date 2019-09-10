import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEntradaServitecaComponent } from './registrar-entrada-serviteca.component';

describe('RegistrarEntradaServitecaComponent', () => {
  let component: RegistrarEntradaServitecaComponent;
  let fixture: ComponentFixture<RegistrarEntradaServitecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEntradaServitecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEntradaServitecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
