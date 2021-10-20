import { TestBed } from '@angular/core/testing';

import { JugadoresFranciscoService } from './jugadores-francisco.service';

describe('JugadoresFranciscoService', () => {
  let service: JugadoresFranciscoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresFranciscoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
