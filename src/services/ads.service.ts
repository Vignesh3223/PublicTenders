import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Ads } from 'src/models/ads';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads = environment.adsurl;

  constructor(private httpclient: HttpClient) { }

  getAds() {
    return this.httpclient.get<Ads[]>(this.ads + '/' + 'GetAds');
  }

  postAds(newad: Ads) {
    return this.httpclient.post<Ads[]>(this.ads + '/' + 'PostAd', newad);
  }
}
