import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CursosService } from './cursos.service';

describe('CursosService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio del modulo Cursos se consume correctamente', () => {
    expect(service).toBeTruthy();
  });

});
