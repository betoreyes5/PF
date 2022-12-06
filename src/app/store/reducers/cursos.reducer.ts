import { createReducer, on } from "@ngrx/store";
import { CursoState } from "../cursos.state";
import { Curso } from "src/app/core/models/curso.interface";
import * as CursosActions from '../actions/cursos.action';

export const cursosFeatureKey = 'cursos';

export const estadoInicial: CursoState = {
    cargando: false,
    cursos:[]
}

export const cursosReducer = createReducer (
    estadoInicial,
   on(CursosActions.cargarCursos, (state) => {
    return {...state, cargando: true }
   }),
   on(CursosActions.cursosCargados,(state,{cursos})=>{
    return {...state, cargando: false, cursos}
   }),
   on(CursosActions.cursosNoCargados,(state,{error})=>{
    return state
   }),
   on(CursosActions.agregarCursos, (state, {Curso}) => {
    return state
  }),
  on(CursosActions.editarCurso, (state, {Curso}) => {
    return state
  }),
  on(CursosActions.eliminarCurso, (state, {Curso}) => {
    return state
  })
)