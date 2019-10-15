import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenseiComponent } from './sensei/sensei.component';
import { StudentComponent } from './student/student.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'Student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'Sensei', component: SenseiComponent, canActivate: [AuthGuard] },
  { path: '', component: LandingPageComponent },
  { path: 'Signin', component: SigninComponent },
  { path: 'Signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
