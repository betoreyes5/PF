
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { MainComponent } from './main.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';


const routes: Routes = [
    {
        path:'',
        component: MainComponent, children: [
            { path: '', component: InicioComponent },
            { path: 'inicio', component: InicioComponent },
            { path: 'alumnos', component: AlumnosComponent },
            { path: 'cursos', component: CursosComponent },           
            { path: 'inscripciones', component: InscripcionesComponent },  
            { path:'**', component: NoencontradoComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }