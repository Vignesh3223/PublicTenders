import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  userlist: any[] =[];

  userId!: number;

  public roleid: number | any;

  constructor(private userserv: UserService, private route: Router) { }

  ngOnInit(): void {

    this.roleid = localStorage.getItem('role');

    this.userserv.getUser().subscribe(
      (res) => {
        this.userlist = res;
      });
  }

  viewUser(id: number) {
    this.userId = id;
    this.route.navigate(['viewUser/' + id]);
  }
}
