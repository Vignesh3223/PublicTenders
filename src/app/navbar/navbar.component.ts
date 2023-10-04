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

  public proprieator: string | any;

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

    this.proprieator = localStorage.getItem('proprieator');
    console.log(this.proprieator);
  }


}
