import { createAction, props } from "@ngrx/store";
import { Curso } from "src/app/core/models/curso.interface";

export const cargarCursos = createAction(
    '[Cursos] Cargar cursos'
)

export const cursosCargados = createAction(
    '[Cursos] Cursos Cargados',
     props<{ cursos: Curso[]}>()
)

export const agregarCursos = createAction(
    '[Cursos] Agregar Curso',
    props<{ Curso: Curso }>()
  )

export const editarCurso = createAction(
    '[Cursos] Editar Curso',
    props<{ Curso: Curso }>()
  )

export const eliminarCurso = createAction(
    '[Cursos] Eliminar Curso',
    props<{ Curso: Curso }>()
  )

  export const cursosNoCargados = createAction(
    '[Cursos] Cursos No Cargados',
     props<{ error: any }>()
)
