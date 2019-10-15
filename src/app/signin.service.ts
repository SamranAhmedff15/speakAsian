import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }
}

export class JwtResponse {
  constructor(
    public jwttoken: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  url = 'http://localhost:8080/user/authenticate';
  constructor(private http: HttpClient) { }

  public signInStudent(mail: string, password: string) {
    return this.http.post<any>(this.url, { mail, password }).pipe(
      map(
        userData => {
          const tokenstr = 'Bearer ' + userData.token;
          localStorage.setItem('token', tokenstr);
          console.log('token created');
          return userData;
        }
      )
    );
  }

  isUserLoggedIn(): boolean {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') == null) {
      console.log('not connected');
      return false;
    } else {
      console.log('connected');
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
