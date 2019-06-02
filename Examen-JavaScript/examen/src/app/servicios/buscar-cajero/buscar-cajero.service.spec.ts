import { TestBed } from '@angular/core/testing';

import { BuscarCajeroService } from './buscar-cajero.service';

describe('BuscarCajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscarCajeroService = TestBed.get(BuscarCajeroService);
    expect(service).toBeTruthy();
  });
});
