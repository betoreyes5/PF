import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
 
  let httpClientSpy: { get: jasmine.Spy };
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio del modulo Alumnos se consume correctamente', () => {
    expect(service).toBeTruthy();
  });

});
