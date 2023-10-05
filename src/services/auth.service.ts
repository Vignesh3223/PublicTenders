import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userPayload: any;

  constructor(private httpclient: HttpClient) {
    this.userPayload = this.decryptToken();
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  decryptToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    const decodedToken = jwtHelper.decodeToken(token);
    return decodedToken;
  }

}
