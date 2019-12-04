import { TestBed } from '@angular/core/testing';

import { servicioVehiculoRegistrarEntradaService } from './servicio-vehiculo-registrar-entrada.service';
import {HttpClientModule} from '@angular/common/http'

describe('ServicioVehiculoRegistrarEntradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('should be created', () => {
    const service: servicioVehiculoRegistrarEntradaService = TestBed.get(servicioVehiculoRegistrarEntradaService);
    expect(service).toBeTruthy();
  });
});
