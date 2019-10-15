import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(private signinService: SigninService, private router: Router) { }
  invalidLogin = false;
  mail: string;
  password: string;

  signInForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    this.mail = this.signInForm.get('mail').value;
    this.password = this.signInForm.get('password').value;

    this.signinService.signInStudent(this.mail, this.password).subscribe(
      data => {
        this.router.navigate(['Student']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    );
  }

  ngOnInit() {
  }
}
