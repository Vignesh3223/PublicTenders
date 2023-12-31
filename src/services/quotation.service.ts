import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Quotation } from 'src/models/quotation';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  quotations = environment.quotationurl;

  constructor(private httpclient: HttpClient) { }

  getquotations() {
    return this.httpclient.get<Quotation[]>(this.quotations + '/' + 'GetQuotations');
  }

  postquotations(newquote: Quotation) {
    return this.httpclient.post<Quotation[]>(this.quotations + '/' + 'PostQuotation', newquote)
  }

  getquotationsbytender(id: number) {
    return this.httpclient.get<Quotation[]>(this.quotations + '/' + 'GetQuote' + '/' + id)
  }
}
