import { TestBed } from '@angular/core/testing';

import { DetalleFacturaService } from './detalle-factura.service';
import {HttpClientModule} from '@angular/common/http'

describe('DetalleFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('should be created', () => {
    const service: DetalleFacturaService = TestBed.get(DetalleFacturaService);
    expect(service).toBeTruthy();
  });
});
