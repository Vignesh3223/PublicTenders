import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Tenders } from 'src/models/tenders';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  tenders = environment.tendersurl;

  constructor(private httpclient: HttpClient) { }

  getTenders() {
    this.httpclient.get<Tenders[]>(this.tenders);
  }

}
