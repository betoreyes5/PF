import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarInscripcionComponent } from './acciones/agregar-inscripcion/agregar-inscripcion.component';
import { EditarInscripcionComponent } from './acciones/editar-inscripcion/editar-inscripcion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesComponent } from './inscripciones.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    AgregarInscripcionComponent,
    EditarInscripcionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InscripcionesModule { }
