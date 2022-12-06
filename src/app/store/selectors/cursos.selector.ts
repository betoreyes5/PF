import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CursoState } from "../cursos.state";
import * as fromCursos from '../reducers/cursos.reducer';


export const selectCursosState  = createFeatureSelector<CursoState>(
    fromCursos.cursosFeatureKey
)

export const selectStateCursos = createSelector(
    selectCursosState,
    (state: CursoState) => state.cursos
)

export const selectStateCargando  = createSelector(
    selectCursosState,
    (state:CursoState) => state.cargando
)