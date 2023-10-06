import { Component, OnInit } from '@angular/core';
import { TendersTaken } from 'src/models/tenderstaken';
import { TenderstakenService } from 'src/services/tenderstaken.service';

@Component({
  selector: 'app-tenderstaken',
  templateUrl: './tenderstaken.component.html',
  styleUrls: ['./tenderstaken.component.css']
})
export class TenderstakenComponent implements OnInit {

  tendertaken: TendersTaken | any;

  public owner: string | any;
  public company: string | any;
  public roleid: number | any;


  constructor(
    private takenservice: TenderstakenService
  ) { }

  ngOnInit(): void {
    this.roleid = localStorage.getItem('role');
    this.owner = localStorage.getItem('proprieator');
    this.company = localStorage.getItem('cname');

    this.takenservice.gettenderstaken().subscribe(
      (res) => {
        this.tendertaken = res.filter(taken => taken.companyName === this.company && taken.proprieator === this.owner);
      }
    )
  }

}
