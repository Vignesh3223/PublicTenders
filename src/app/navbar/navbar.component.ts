import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public companyname: string | any;
  public roleid: number | any;
  public profile: string | any;

  userlist: any;

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
    this.roleid = localStorage.getItem('role');
    this.profile = localStorage.getItem('profile');
  }

  logout() {
    localStorage.clear();
    console.log('logged out');
    this.route.navigate(["/"]);
    this.ngOnInit();
  }
}
