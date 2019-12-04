import { TestBed } from '@angular/core/testing';

import { ClienteVehiculoService } from './cliente-vehiculo.service';
import {HttpClientModule} from '@angular/common/http'

describe('ClienteVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ClienteVehiculoService = TestBed.get(ClienteVehiculoService);
    expect(service).toBeTruthy();
  });
});
