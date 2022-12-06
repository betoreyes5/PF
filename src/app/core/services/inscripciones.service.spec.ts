import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InscripcionesService } from './inscripciones.service';

describe('InscripcionesService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let service: InscripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new InscripcionesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio del modulo Inscripciones se consume correctamente', () => {
    expect(service).toBeTruthy();
  });

});
