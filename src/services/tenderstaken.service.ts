import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { TendersTaken } from 'src/models/tenderstaken';

@Injectable({
  providedIn: 'root'
})
export class TenderstakenService {

  tendertaken = environment.tenderstakenurl;

  constructor(private httpclient: HttpClient) { }

  gettenderstaken() {
    return this.httpclient.get<TendersTaken[]>(this.tendertaken + '/' + 'GetTendersTakens');
  }

  posttenderstaken(tenders: TendersTaken) {
    return this.httpclient.post<TendersTaken[]>(this.tendertaken + '/' + 'PostTendersTaken', tenders);
  }

  postmail(tenders: TendersTaken) {
    return this.httpclient.post<TendersTaken[]>(this.tendertaken + '/' + 'SendMail' + '/'+ 'SendMail', tenders)
  }
}
