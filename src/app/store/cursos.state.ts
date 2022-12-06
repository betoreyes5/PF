import { Curso } from "../core/models/curso.interface";

export interface CursoState{
    cargando: boolean;
    cursos: Curso[];    
}