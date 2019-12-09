import { TestBed } from '@angular/core/testing';

import { reportesServices } from './reportes.service'

describe('reportesServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: reportesServices = TestBed.get(reportesServices);
    expect(service).toBeTruthy();
  });
});