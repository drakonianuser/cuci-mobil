import { TestBed } from '@angular/core/testing';

import { ParametrizacionService } from './parametrizacion.service';

describe('ParametrizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametrizacionService = TestBed.get(ParametrizacionService);
    expect(service).toBeTruthy();
  });
});
