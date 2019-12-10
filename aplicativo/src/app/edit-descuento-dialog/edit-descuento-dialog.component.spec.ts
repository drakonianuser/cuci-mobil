import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDescuentoDialogComponent } from './edit-descuento-dialog.component';

describe('EditDescuentoDialogComponent', () => {
  let component: EditDescuentoDialogComponent;
  let fixture: ComponentFixture<EditDescuentoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDescuentoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDescuentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
