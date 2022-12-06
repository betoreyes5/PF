import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { AgregarCursosComponent } from './acciones/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from './acciones/editar-cursos/editar-cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cursosFeatureKey, cursosReducer } from 'src/app/store/reducers/cursos.reducer';
import { CursosEffects } from 'src/app/store/effects/cursos.effects';

@NgModule({
  declarations: [
    CursosComponent,
    AgregarCursosComponent,
    EditarCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule  ,
    StoreModule.forFeature(cursosFeatureKey, cursosReducer),
    EffectsModule.forFeature([CursosEffects]) 
  ]
})
export class CursosModule { }
