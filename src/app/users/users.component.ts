import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist: any;

  userId!: number;

  constructor(private userserv: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userserv.getUser().subscribe(
      (res) => {
        this.userlist = res;
        console.log(this.userlist);
      });
  }

  viewUser(id: number) {
    this.userId = id;
    this.route.navigate(['viewUser/' + id]);
  }
}
