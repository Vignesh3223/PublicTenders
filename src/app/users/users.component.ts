import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist: any;
  constructor(private userserv: UserService) { }
  ngOnInit(): void {
    this.userserv.getUser().subscribe(
      (res) => {
        this.userlist = res;
        console.log(this.userlist);
      });
  }
}
