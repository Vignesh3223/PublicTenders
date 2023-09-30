import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Users } from 'src/models/users';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = environment.userurl;

  currentuser = environment.loginurl;

  public authSubject = new Subject<boolean>;
  validateAuth(state: boolean) {
    this.authSubject.next(state);
  }

  status?: boolean;

  getAuthStatus() {
    this.authSubject.subscribe(
      res => {
        this.status = res;
      });
    return this.status;
  }

  constructor(private httpclient: HttpClient) { }

  getUser() {
    return this.httpclient.get<Users[]>(this.users);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getActiveUser() {
    return this.httpclient.get<Users[]>(this.currentuser);
  }
}
