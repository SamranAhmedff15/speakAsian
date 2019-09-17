import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = 'http://localhost:8080/speakasian/student/signup';
  constructor(private http: HttpClient) {
  }

  public signupStudent(student) {
    return this.http.post(this.url, student);
  }
}
