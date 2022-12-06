import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/core/models/curso.interface';
import { CursosService } from 'src/app/core/services/cursos.service';
import { cursosCargados, cursosNoCargados } from 'src/app/store/actions/cursos.action';
import { CursoState } from 'src/app/store/cursos.state';
import { selectStateCargando, selectStateCursos } from 'src/app/store/selectors/cursos.selector';
import { AgregarCursosComponent } from './acciones/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from './acciones/editar-cursos/editar-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy  {

  cursos$!: Observable<Curso[]>;
  cargando$!: Observable<boolean>;
  suscripcionCursos!: Subscription;

  constructor(
    private dialog: MatDialog, 
    private cursosService: CursosService,
    private store: Store<CursoState>
  ) { 
    this.cursos$ = this.store.select(selectStateCursos); 
    this.cargando$ = this.store.select(selectStateCargando);
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursosService.listaCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(cursosCargados({cursos}));
      },
      error: (error: any) => {
        alert("Hubo un error al cargar cursos")
        this.store.dispatch(cursosNoCargados(error));
      }
    });
  }

  openDialog(): void {
    this.dialog.open(AgregarCursosComponent, {
      width: '45%',
      height: '60%',            
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
       this.nuevoCurso(result);   
      }         
   });
  }

  nuevoCurso(curso:any){
    this.cursosService.agregarCurso(curso);
    this.cursos$ = this.cursosService.listaCursos();
  }

  editarCurso(element:any ){
    this.dialog.open(EditarCursosComponent, {
      width: '45%',
      height: '60%', 
      data: element         
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
        this.cursosService.editarCurso(result);
        this.cursos$ = this.cursosService.listaCursos();
      }     
    }); 
  }

  eliminarCurso(curso: Curso){
    this.cursosService.eliminarCurso(curso);
    this.cursos$ = this.cursosService.listaCursos();
  }

  ngOnDestroy(): void {   
    this.suscripcionCursos.unsubscribe();
  }

}
