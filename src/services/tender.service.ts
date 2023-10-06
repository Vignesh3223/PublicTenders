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
    return this.httpclient.get<Tenders[]>(this.tenders + '/' + 'GetTenders');
  }

  getTenderbyId(id: number) {
    return this.httpclient.get<Tenders[]>(this.tenders + '/' + 'GetTender' + '/' + id);
  }

  postTender(newtender: Tenders) {
    return this.httpclient.post<Tenders[]>(this.tenders + '/' + 'PostTender', newtender);
  }

}
