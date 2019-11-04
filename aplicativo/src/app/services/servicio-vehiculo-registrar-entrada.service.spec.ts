import { TestBed } from '@angular/core/testing';

import { ServicioVehiculoRegistrarEntradaService } from './servicio-vehiculo-registrar-entrada.service';

describe('ServicioVehiculoRegistrarEntradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioVehiculoRegistrarEntradaService = TestBed.get(ServicioVehiculoRegistrarEntradaService);
    expect(service).toBeTruthy();
  });
});
