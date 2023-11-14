import { TestBed } from '@angular/core/testing';

import { SerivicioPruebaService } from './serivicio-prueba.service';

describe('SerivicioPruebaService', () => {
  let service: SerivicioPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivicioPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
