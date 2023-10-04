import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { HttpClient } from '@angular/common/http';
import { TenderService } from 'src/services/tender.service';
import { Tenders } from 'src/models/tenders';
import { CategoryService } from 'src/services/category.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Quotation } from 'src/models/quotation';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/envionment';
import { QuotationService } from 'src/services/quotation.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})

export class TendersComponent implements OnInit {

  tenderslist: Tenders | any;

  tenderapi = environment.tendersurl;

  quoteapi = environment.quotationurl;

  categorylist: Category | any;

  tenderId!: number;

  selectedCategory: string | any;

  searchText = '';

  sortParam: any;
  sortDirection: any;
  optionSelected: any;

  public proprieator: string | any;

  paymentHandler: any = null;
  paymentButtonHidden: boolean = false;
  paymentSuccess: boolean = false;

  userid: number | any;
  company: string | any;
  owner: string | any;
  tenderid: number | any;
  tendname: string | any;
  provalue: number | any;
  location: string | any;
  authority: string | any;
  prostart: Date | any;
  proend: Date | any;
  appfee: number | any;

  constructor(private httpclient: HttpClient,
    private tenderserv: TenderService,
    private categoryserv: CategoryService,
    private messageService: MessageService,
    private quoteservice: QuotationService,
    private route: Router) {
    this.ApplicationFee = 0;
  }

  QuoteForm: FormGroup | any;
  QuotationId: FormControl | any;
  UserId: FormControl | any;
  CompanyName: FormControl | any;
  Proprieator: FormControl | any;
  TenderId: FormControl | any;
  TenderName: FormControl | any;
  ProjectValue: FormControl | any;
  Location: FormControl | any;
  Authority: FormControl | any;
  ProjectStartDate: FormControl | any;
  ProjectEndDate: FormControl | any;
  ApplicationFee: FormControl | any;
  QuoteAmount: FormControl | any;

  submitted = false;

  makePayment() {
    const amount = this.ApplicationFee;
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NQoOgSIF8NYMtoSsE3ybqgFcjiafBmE6SgRG0LOoz02qHSXlYDYWfB0wcZzauNoi8fpI8CJ7WQCOqcIeBJG72Pf00sQlgKl12',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        this.paymentButtonHidden = true;
        this.paymentSuccess = true;
        console.log('Payment Success');
      }
    });
    paymentHandler.open({
      name: 'Application Fee',
      description: 'Quote application fee',
      amount: amount,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NQoOgSIF8NYMtoSsE3ybqgFcjiafBmE6SgRG0LOoz02qHSXlYDYWfB0wcZzauNoi8fpI8CJ7WQCOqcIeBJG72Pf00sQlgKl12',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            console.log('payment failed');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

  ngOnInit(): void {

    this.UserId = new FormControl('');
    this.CompanyName = new FormControl('');
    this.Proprieator = new FormControl('');
    this.TenderId = new FormControl('');
    this.TenderName = new FormControl('');
    this.ProjectValue = new FormControl('');
    this.Location = new FormControl('');
    this.Authority = new FormControl('');
    this.ProjectStartDate = new FormControl('');
    this.ProjectEndDate = new FormControl('');
    this.ApplicationFee = new FormControl('');
    this.QuoteAmount = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')
    ]);

    this.QuoteForm = new FormGroup({
      UserId: this.UserId,
      CompanyName: this.CompanyName,
      Proprieator: this.Proprieator,
      TenderId: this.TenderId,
      TenderName: this.TenderName,
      ProjectValue: this.ProjectValue,
      Location: this.Location,
      Authority: this.Authority,
      ProjectStartDate: this.ProjectStartDate,
      ProjectEndDate: this.ProjectEndDate,
      ApplicationFee: this.ApplicationFee,
      QuoteAmount: this.QuoteAmount
    });

    this.categoryserv.getCategories().subscribe((categories) => {
      const categoryList = categories;
      this.tenderserv.getTenders().subscribe((tenders) => {
        this.tenderslist = tenders;
        this.tenderslist.forEach((tender: any) => {
          const matchingCategory = categoryList.find((category) => category.categoryId === tender.categoryId);
          if (matchingCategory) {
            tender.categoryName = matchingCategory.categoryName;
          }
        });
        console.log(this.tenderslist);
      });
    });

    this.proprieator = localStorage.getItem('proprieator');

    this.invokeStripe();
  }

  viewTender(id: number) {
    this.tenderId = id;
    this.route.navigate(['viewTender/' + id]);
  }

  onOptionsSelected(event: any) {
    console.log(event.target.value);
    this.optionSelected = event.target.value;
    this.sortParam = 'tenderClosingDate';
    this.sortDirection = 'asc';
    if (this.optionSelected === 'f-n') {
      (this.sortParam = 'duedate'), (this.sortDirection = 'desc');
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tender Quoted Successfully' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all the details' });
  }

  showPaymentError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Pay application fee before Quoting' });
  }

  GetDetails(tender: Tenders) {

    this.userid = localStorage.getItem('user');
    this.company = localStorage.getItem('cname');
    this.owner = localStorage.getItem('proprieator');

    const userDetails = {
      UserId: this.userid,
      CompanyName: this.company,
      Proprieator: this.owner,
    };

    this.tenderid = tender.tenderId;
    this.tendname = tender.tenderName;
    this.provalue = tender.projectValue;
    this.location = tender.location;
    this.authority = tender.authority;
    this.prostart = tender.projectStartDate;
    this.proend = tender.projectEndDate;
    this.appfee = tender.applicationFee;

    const tenderDetails = {
      TenderId: this.tenderid,
      TenderName: this.tendname,
      ProjectValue: this.provalue,
      Location: this.location,
      Authority: this.authority,
      ProjectStartDate: this.prostart,
      ProjectEndDate: this.proend,
      ApplicationFee: this.appfee
    };

    this.QuoteForm.patchValue({
      ...userDetails,
      ...tenderDetails,
    });
  }

  onQuote() {
    this.submitted = true;
    if (this.QuoteForm.invalid) {
      this.showError();
    }
    else {
      if (this.paymentSuccess) {
        this.quoteservice.postquotations(this.QuoteForm.value).subscribe({
          next: (res) => {
            console.log(res);
            this.showSuccess();
            this.QuoteForm.reset();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
      else {
        this.showPaymentError();
      }
    }
  }


}
