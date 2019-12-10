import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDescuentoDialogComponent } from './add-descuento-dialog.component';

describe('AddDescuentoDialogComponent', () => {
  let component: AddDescuentoDialogComponent;
  let fixture: ComponentFixture<AddDescuentoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDescuentoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDescuentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
