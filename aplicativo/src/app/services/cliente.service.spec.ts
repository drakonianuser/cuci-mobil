import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import {HttpClientModule} from '@angular/common/http'

describe('ClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('se creo el servicio', () => {
    const service: ClienteService = TestBed.get(ClienteService);
    expect(service).toBeTruthy();
  });
});
