import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Student } from '../student';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private signupService: SignupService) {
    this.changeText = false;
  }

  student: Student = new Student();

  changeText: boolean;

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    sex: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    classLevel: new FormControl('', [Validators.required]),
    schoolLevel: new FormControl('', [Validators.required])
  });


  selectedLevel(level: string) {
    this.signUpForm.get('classLevel').setValue(level);
  }

  onSubmit() {
    this.student.birthDate = this.signUpForm.get('birthDate').value;
    this.student.classLevel = this.signUpForm.get('classLevel').value;
    this.student.firstName = this.signUpForm.get('firstName').value;
    this.student.lastName = this.signUpForm.get('lastName').value;
    this.student.mail = this.signUpForm.get('mail').value;
    this.student.password = this.signUpForm.get('password').value;
    this.student.phoneNumber = this.signUpForm.get('phoneNumber').value;
    this.student.schoolLevel = this.signUpForm.get('schoolLevel').value;
    this.student.sex = this.signUpForm.get('sex').value;

    console.log(this.student.id);
    this.signupService.signupStudent(this.student).subscribe();
  }

  ngOnInit() {
  }

}
