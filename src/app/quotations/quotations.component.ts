import { Component, OnInit } from '@angular/core';
import { TenderService } from 'src/services/tender.service';
import { CategoryService } from 'src/services/category.service';
import { Tenders } from 'src/models/tenders';
import { Quotation } from 'src/models/quotation';
import { QuotationService } from 'src/services/quotation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {

  tenderlist: Tenders | any;

  quotes: Quotation | any;

  public owner: string | any;
  public company: string | any;
  public roleid: number | any;

  tenderid!: number;

  constructor(
    private tenderserv: TenderService,
    private categoryserv: CategoryService,
    private quotservice: QuotationService,
    private route: Router) { }

  ngOnInit(): void {

    this.owner = localStorage.getItem('proprieator');
    this.company = localStorage.getItem('cname');
    this.roleid = localStorage.getItem('role');

    this.categoryserv.getCategories().subscribe((categories) => {
      const categoryList = categories;
      this.tenderserv.getTenders().subscribe((tenders) => {
        this.tenderlist = tenders;
        this.tenderlist.forEach((tender: any) => {
          const matchingCategory = categoryList.find((category) => category.categoryId === tender.categoryId);
          if (matchingCategory) {
            tender.categoryName = matchingCategory.categoryName;
          }
        });
      });
    });

    this.quotservice.getquotations().subscribe(
      (res) => {
        this.quotes = res.filter(quot => quot.companyName === this.company && quot.proprieator === this.owner);
      });
  }

  viewQuotations(id: number) {
    this.tenderid = id;
    this.route.navigate(['viewQuotations/' + id]);
  }

}
