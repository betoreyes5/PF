import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/curso.interface';
import { CursoState } from 'src/app/store/cursos.state';
import { selectStateCursos } from 'src/app/store/selectors/cursos.selector';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {

  formInscripcion !: FormGroup; 
  cursos$!: Observable<Curso[]>;
  cursoSeleccionado!: Curso;
  
  constructor(
    public dialogRef: MatDialogRef<AgregarInscripcionComponent>,
    private fb:FormBuilder,
    private storeCursos: Store<CursoState>
  ) { 
    this.formInscripcion = this.fb.group({
      curso: ['',[Validators.required]],
      alumno:['',Validators.required] 
    });    
  }

  ngOnInit(): void {
    this.cursos$ = this.storeCursos.select(selectStateCursos);
  }

  guardarInscripcion() {   
    this.dialogRef.close(this.formInscripcion.value);
  }

  cancelarInscripcion(){
    this.dialogRef.close();
  }

}
