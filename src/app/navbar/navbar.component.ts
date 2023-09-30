import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userlist: any;
  
  hide!: boolean;

  auth: boolean = false;

  token = localStorage.getItem('token');

  constructor(private userserv: UserService, private route: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token) {
      this.hide = true;
    }
    else {
      this.hide = false;
    }

    // this.userserv.getActiveUser().subscribe(
    //   (res) => {
    //     this.userlist = res;
    //     console.log(this.userlist);
    //   });
  }
  logout() {
    localStorage.removeItem('token');
    this.userserv.validateAuth(false);
    this.route.navigate(["/"]);
  }
}
