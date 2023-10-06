import { Component, OnInit } from '@angular/core';
import { Ads } from 'src/models/ads';
import { AdsService } from 'src/services/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  adslist: Ads | any;

  constructor(private adserv: AdsService) { }

  ngOnInit(): void {
    this.adserv.getAds().subscribe(
      (ads) => {
        this.adslist = ads;
        console.log(this.adslist)
      });
  }

}
