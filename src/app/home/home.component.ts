import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public companyname: string | any;
  public proprieator: string | any;

  hide!: boolean;

  token = localStorage.getItem('token');

  constructor(
    private userserv: UserService,
    private route: Router,
    private authserv: AuthService) { }


  ngOnInit(): void {
    const token = this.authserv.getToken();
    if (token) {
      this.hide = true;
    }
    else {
      this.hide = false;
    }

    this.companyname = localStorage.getItem('cname');
    this.proprieator = localStorage.getItem('proprieator');
    console.log(this.companyname);
    console.log(this.proprieator);
  }

  logout() {
    localStorage.clear();
    console.log('logged out');
    this.route.navigate(["/"]);
    this.ngOnInit();
  }
  
}
