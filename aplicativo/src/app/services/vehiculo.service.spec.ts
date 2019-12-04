import { TestBed } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';
import {HttpClientModule} from '@angular/common/http'

describe('VehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('should be created', () => {
    const service: VehiculoService = TestBed.get(VehiculoService);
    expect(service).toBeTruthy();
  });
});
