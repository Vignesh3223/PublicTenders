import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  userlist: any[] =[];

  userId!: number;

  public roleid: number | any;

  first: number = 0;
  rows: number = 3;

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


  onPageChange(event: PageEvent|any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
