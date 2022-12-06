import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.interface';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  agregarUsuario(usuario:Usuario): Observable<Usuario>{
   return this.http.post<Usuario>(`${ environment.apiURL }/usuarios`, usuario)    
   }

   login(usuario: Usuario): Observable<Usuario>{
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(
          (u: Usuario) => u.id === usuario.id && u.password === usuario.password)[0]
      }));
  }

}
