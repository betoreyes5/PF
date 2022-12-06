import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { AlumnosModule } from './alumnos/alumnos.module';


@NgModule({
  declarations: [
   MainComponent,
   InicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,    
    CursosModule,   
    InscripcionesModule,
    AlumnosModule
  ]
})
export class MainModule { }
