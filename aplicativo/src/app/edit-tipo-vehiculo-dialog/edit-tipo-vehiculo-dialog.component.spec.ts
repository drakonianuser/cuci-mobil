import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoVehiculoDialogComponent } from './edit-tipo-vehiculo-dialog.component';

describe('EditTipoVehiculoDialogComponent', () => {
  let component: EditTipoVehiculoDialogComponent;
  let fixture: ComponentFixture<EditTipoVehiculoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTipoVehiculoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoVehiculoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
