import { TestBed } from '@angular/core/testing';

import { GuardarService } from './guardar.service';

describe('GuardarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardarService = TestBed.get(GuardarService);
    expect(service).toBeTruthy();
  });
});
