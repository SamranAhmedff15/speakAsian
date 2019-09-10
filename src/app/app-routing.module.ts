import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenseiComponent } from './sensei/sensei.component';
import { StudentComponent } from './student/student.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{ path: 'Student', component: StudentComponent},
{ path: 'Sensei', component: SenseiComponent},
{ path: '', component: LandingPageComponent},
{ path: 'Signin', component: SigninComponent},
{ path: 'Signup', component:  SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
