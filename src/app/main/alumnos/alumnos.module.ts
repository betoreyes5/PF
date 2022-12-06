import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AgregarAlumnosComponent } from './acciones/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from './acciones/editar-alumnos/editar-alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlumnosComponent,
    AgregarAlumnosComponent,
    EditarAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlumnosModule { }
