import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  userid: number | any;
  userdata: Users | any;

  constructor(
    private userserv: UserService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userid = this.actRoute.snapshot.params['id'];

    this.userserv.getUserbyId(this.userid).subscribe(
      (user) => {
        this.userdata = user;
      });
  }
}
