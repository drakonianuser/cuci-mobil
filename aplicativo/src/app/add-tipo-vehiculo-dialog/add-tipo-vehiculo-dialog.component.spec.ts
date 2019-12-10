import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoVehiculoDialogComponent } from './add-tipo-vehiculo-dialog.component';

describe('AddTipoVehiculoDialogComponent', () => {
  let component: AddTipoVehiculoDialogComponent;
  let fixture: ComponentFixture<AddTipoVehiculoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTipoVehiculoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoVehiculoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
