import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el componente Login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });


it('Retorna formulario invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() 

    const email = app.formSignIn.controls['user']
    email.setValue('areyes5')

    expect(app.formSignIn.invalid).toBeTrue();
  });


  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let u = app.formSignIn.controls['user']
    let p = app.formSignIn.controls['password']
    let result = app.formSignIn.controls['result']

    u.setValue('leifer33@gmail.com')
    p.setValue('123456')
    result.setValue('1')

    expect(app.formSignIn.invalid).toBeFalse(); 
    
  });


});
