import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Users } from 'src/models/users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = environment.userurl;

  constructor(private httpclient: HttpClient) { }

  getUser() {
    return this.httpclient.get<Users[]>(this.users + '/' + 'GetUsers');
  }

  getUserbyId(id: number) {
    return this.httpclient.get<Users[]>(this.users + '/' + 'GetUser' + '/' + id);
  }

}
