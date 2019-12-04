import { TestBed } from '@angular/core/testing';

import { DescuentoService } from './descuento.service';
import {HttpClientModule} from '@angular/common/http'

describe('DescuentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('should be created', () => {
    const service: DescuentoService = TestBed.get(DescuentoService);
    expect(service).toBeTruthy();
  });
});
