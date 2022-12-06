import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [];

  constructor(private http: HttpClient) { }

  listaCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.apiURL}/cursos`)
  }
  
  agregarCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(`${environment.apiURL}/cursos`,curso)
  }
  
  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${environment.apiURL}/cursos/${curso.id}`, curso)
  }
  
  eliminarCurso(curso: Curso): Observable<Curso>{  
    return this.http.delete<Curso>(`${environment.apiURL}/cursos/${curso.id}`) 
  }


}
