import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscripcion } from '../models/inscripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripion: Inscripcion []=[];

  constructor(private http: HttpClient) { }

  listaInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.apiURL}/inscripciones`)
  }
  
  agregarInscripcion(inscripcion:Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(`${environment.apiURL}/inscripciones`,inscripcion)
  }
  
  editarInscripcion(inscripcion:Inscripcion): Observable<Inscripcion>{
    return this.http.put<Inscripcion>(`${environment.apiURL}/inscripciones/${inscripcion.id}`, inscripcion)
  }
  
  eliminarInscripcion(inscripcion:Inscripcion): Observable<Inscripcion>{  
    return this.http.delete<Inscripcion>(`${environment.apiURL}/inscripciones/${inscripcion.id}`) 
  }
  
}
