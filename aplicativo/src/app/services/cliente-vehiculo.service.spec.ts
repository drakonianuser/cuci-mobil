import { TestBed } from '@angular/core/testing';

import { ClienteVehiculoService } from './cliente-vehiculo.service';

describe('ClienteVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteVehiculoService = TestBed.get(ClienteVehiculoService);
    expect(service).toBeTruthy();
  });
});
