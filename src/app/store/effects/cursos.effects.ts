import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import * as CursosActions from '../actions/cursos.action';
import { Curso } from "src/app/core/models/curso.interface";
import { CursosService } from "src/app/core/services/cursos.service";


@Injectable()
export class CursosEffects{

    constructor(
        private actions$: Actions,
        private cursoService: CursosService
    ){}
    
    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe( 
          ofType(CursosActions.cursosCargados),
          concatMap(() => this.cursoService.listaCursos().pipe(
            map((i: Curso[]) => CursosActions.cursosCargados({cursos: i}))
          ))
        );
      });

      agregarCursos$ = createEffect(() => {
        return this.actions$.pipe( 
          ofType(CursosActions.agregarCursos),
          concatMap(({ Curso }) => this.cursoService.agregarCurso(Curso).pipe(
            map((i: Curso) => CursosActions.cargarCursos())
          ))
        );
      });

      editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(CursosActions.editarCurso),
          concatMap(({ Curso }) => this.cursoService.editarCurso(Curso).pipe(
            map((i: Curso) => CursosActions.cargarCursos())
          ))
        );
      });

      eliminarCurso$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(CursosActions.eliminarCurso),
          concatMap(({ Curso }) => this.cursoService.eliminarCurso(Curso).pipe(
            map((i: Curso) => CursosActions.cargarCursos())
          ))
        );
      });


}