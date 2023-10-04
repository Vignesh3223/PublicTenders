import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Users } from 'src/models/users';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = environment.userurl;

  private fullName = new BehaviorSubject<string>("");
  private role = new BehaviorSubject<string>("");

  constructor(private httpclient: HttpClient) { }

  getUser() {
    return this.httpclient.get<Users[]>(this.users);
  }

  public getRole() {
    return this.role.asObservable();
  }

  public setRole(role: string) {
    this.role.next(role);
  }

  public getFullName() {
    return this.fullName.asObservable();
  }

  public setFullName(name: string) {
    this.fullName.next(name);
  }

}
