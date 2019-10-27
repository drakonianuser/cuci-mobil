import { TestBed } from '@angular/core/testing';

import { TipoVehiculoService } from './tipo-vehiculo.service';

describe('TipoVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoVehiculoService = TestBed.get(TipoVehiculoService);
    expect(service).toBeTruthy();
  });
});
