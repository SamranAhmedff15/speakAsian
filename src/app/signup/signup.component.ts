import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  changeText: boolean;
  constructor() {
    this.changeText = false;
  }

  ngOnInit() {
  }

}
