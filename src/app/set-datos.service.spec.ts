import { TestBed } from '@angular/core/testing';

import { SetDatosService } from './set-datos.service';

describe('SetDatosService', () => {
  let service: SetDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
