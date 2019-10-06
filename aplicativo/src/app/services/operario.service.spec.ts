import { TestBed } from '@angular/core/testing';

import { OperarioService } from './operario.service';

describe('OperarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperarioService = TestBed.get(OperarioService);
    expect(service).toBeTruthy();
  });
});
