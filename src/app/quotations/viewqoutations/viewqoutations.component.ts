import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotationService } from 'src/services/quotation.service';
import { Quotation } from 'src/models/quotation';

@Component({
  selector: 'app-viewqoutations',
  templateUrl: './viewqoutations.component.html',
  styleUrls: ['./viewqoutations.component.css']
})
export class ViewqoutationsComponent implements OnInit {

  tenderId: number | any;
  quotedata: Quotation | any;
  experience: number | any;


  constructor(
    private qoutservice: QuotationService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tenderId = this.actRoute.snapshot.params['tenderId'];

    this.qoutservice.getquotationsbytender(this.tenderId).subscribe(
      (quote) => {
        this.quotedata = quote;
      });
  };
}