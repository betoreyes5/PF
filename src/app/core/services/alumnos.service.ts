import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

   constructor(
       private http: HttpClient
    ) { }

  listaAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${environment.apiURL}/alumnos`).pipe(
      catchError(this.manejarError)
    )
  }
  
  agregarAlumno(alumno:Alumno){
    return this.http.post(`${environment.apiURL}/alumnos`,alumno).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  
  editarAlumno(alumno:Alumno){
    return this.http.put(`${environment.apiURL}/alumnos/${alumno.id}`, alumno).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  
  eliminarAlumno(alumno:Alumno){  
    return this.http.delete(`${environment.apiURL}/alumnos/${alumno.id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log); 
  }


  private manejarError(error: HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.warn('Error cliente-cursos', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP-API-Cursos'));

  }
  
}
