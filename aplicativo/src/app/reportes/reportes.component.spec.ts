import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportes } from './reportes.component';


describe('PantallaInicioComponent', () => {
  let component: Reportes;
  let fixture: ComponentFixture<Reportes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reportes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
