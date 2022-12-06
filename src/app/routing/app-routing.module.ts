import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { LoginComponent } from '../main/login/login.component';
import { NoencontradoComponent } from '../main/noencontrado/noencontrado.component';

const routes: Routes = [
  {
    path:'', 
    pathMatch:'full', 
    redirectTo:'login'
  },
  {
    path:'login', 
    component: LoginComponent
  }, 
  {
    path:'main', 
    loadChildren: () => import('../main/main.module').then(x => x.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path:'**', 
    component: NoencontradoComponent
  }   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
