import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { SignService } from 'src/app/core/services/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formSignIn !: FormGroup; 
  formSignUp !: FormGroup;
  Subscription!: Subscription; 
  loading1!:boolean;
  loading2!:boolean;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService, 
    private signService: SignService,
    private router: Router    
  ) { 
    this.formSignIn = this.fb.group({
      user:['',Validators.required],
      password: ['',[Validators.required]]     
    }),
    this.formSignUp = this.fb.group({
      user: ['',[Validators.required]],
      email:['',Validators.required],   
      password: ['',[Validators.required]] ,
      type: ['','']
    })
  }
  ngOnDestroy(): void {   
  }

  ngOnInit(): void {
    this.loading1 = false;
    this.loading2 = false;
    if(this.authService.islogIn()){
      this.router.navigate(['main']);
    }
  }

  validarSesion(){

    this.loading1 = true;  
  
    setTimeout(() => {
     
      if (this.formSignIn.valid) {
     //   console.log(this.formSignIn.value)
          this.authService.logIn(this.formSignIn.value).subscribe(
          (result:any) => {
           // console.log(result);
            this.loading1 = false;
          //  this.toastr.success('BIENVENIDO!...', 'Acceso Correcto!');
            this.router.navigate(['main']);
          },
          (err: Error) => {
            this.loading1 = false;
           // this.toastr.error('Lo sentimos es posible accesar ...', 'Error', {
           //   timeOut: 1500,
           // });
          }
        );
      }
    }, 1500 );      
    
  }

  guardarUsuario(){

    this.loading2 = true;  

    setTimeout(() => { 

      if (this.formSignUp.valid) {
        this.signService.agregarUsuario(this.formSignUp.value).subscribe(
          (result:any) => {
            this.formSignUp.reset();
            this.loading2 = false;
         //   this.toastr.success('BIENVENIDO!...', 'Registro Correcto!');
            this.router.navigate(['main']);
        }),
        (err: Error) => {
          this.loading2 = false;
        //  this.toastr.error('Lo sentimos es posible realizar el registro...', 'Error', {
        //    timeOut: 1500,
        //  });
        }        
      }
    }, 1500 ); 
  }

  OnDestroy(){
    this.Subscription.unsubscribe;
  }

}
