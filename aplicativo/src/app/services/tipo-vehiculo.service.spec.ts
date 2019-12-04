import { TestBed } from '@angular/core/testing';

import { TipoVehiculoService } from './tipo-vehiculo.service';
import {HttpClientModule} from '@angular/common/http'

describe('TipoVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('should be created', () => {
    const service: TipoVehiculoService = TestBed.get(TipoVehiculoService);
    expect(service).toBeTruthy();
  });
});
