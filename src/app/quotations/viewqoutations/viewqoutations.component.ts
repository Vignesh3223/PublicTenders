import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotationService } from 'src/services/quotation.service';
import { Quotation } from 'src/models/quotation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TenderstakenService } from 'src/services/tenderstaken.service';

@Component({
  selector: 'app-viewqoutations',
  templateUrl: './viewqoutations.component.html',
  styleUrls: ['./viewqoutations.component.css']
})
export class ViewqoutationsComponent implements OnInit {

  tenderid: number | any;
  quotedata: Quotation | any;
  experience: number | any;

  tendid: number | any;
  quoteid: number | any;
  tendname: string | any;
  company: string | any;
  owner: string | any;
  mail: string | any;
  provalue: number | any;
  place: string | any;
  autho: string | any;
  prostart: Date | any;
  proend: Date | any;
  quoteamt: number | any;

  constructor(
    private qoutservice: QuotationService,
    private actRoute: ActivatedRoute,
    private messageService: MessageService,
    private takeservice: TenderstakenService
  ) { }

  TenderTakenForm: FormGroup | any;
  tenderId: FormControl | any;
  quotationId: FormControl | any;
  tenderName: FormControl | any;
  companyName: FormControl | any;
  proprieator: FormControl | any;
  email: FormControl | any;
  projectValue: FormControl | any;
  location: FormControl | any;
  authority: FormControl | any;
  projectStartDate: FormControl | any;
  projectEndDate: FormControl | any;
  quoteAmount: FormControl | any;

  submitted = false;

  ngOnInit(): void {
    this.tenderId = new FormControl('');
    this.quotationId = new FormControl('');
    this.tenderName = new FormControl('');
    this.companyName = new FormControl('');
    this.proprieator = new FormControl('');
    this.email = new FormControl('');
    this.projectValue = new FormControl('');
    this.location = new FormControl('');
    this.authority = new FormControl('');
    this.projectStartDate = new FormControl('');
    this.projectEndDate = new FormControl('');
    this.quoteAmount = new FormControl('');

    this.TenderTakenForm = new FormGroup({
      tenderId: this.tenderId,
      quotationId: this.quotationId,
      tenderName: this.tenderName,
      companyName: this.companyName,
      proprieator: this.proprieator,
      email: this.email,
      projectValue: this.projectValue,
      location: this.location,
      authority: this.authority,
      projectStartDate: this.projectStartDate,
      projectEndDate: this.projectEndDate,
      quoteAmount: this.quoteAmount
    });

    this.tenderid = this.actRoute.snapshot.params['tenderid'];

    this.qoutservice.getquotationsbytender(this.tenderid).subscribe(
      (quote) => {
        this.quotedata = quote;
        this.sortQuotedataByAmount();
      });

  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tender Given and Mail Sent Successfully' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all the details' });
  }

  GetDetails(quotation: Quotation) {
    this.tendid = quotation.tenderId;
    this.quoteid = quotation.quotationId;
    this.tendname = quotation.tenderName;
    this.company = quotation.companyName;
    this.owner = quotation.proprieator;
    this.mail = quotation.email;
    this.provalue = quotation.projectValue;
    this.place = quotation.location;
    this.autho = quotation.authority;
    this.prostart = quotation.projectStartDate;
    this.proend = quotation.projectEndDate;
    this.quoteamt = quotation.quoteAmount

    const quoteDetails = {
      tenderId: this.tendid,
      quotationId: this.quoteid,
      tenderName: this.tendname,
      companyName: this.company,
      proprieator: this.owner,
      email: this.mail,
      projectValue: this.provalue,
      location: this.place,
      authority: this.autho,
      projectStartDate: this.prostart,
      projectEndDate: this.proend,
      quoteAmount: this.quoteamt
    };

    this.TenderTakenForm.patchValue({ ...quoteDetails });
  }

  sortQuotedataByAmount() {
    this.quotedata.sort((a: any, b: any) => {
      const amountA = parseFloat(a.quoteAmount);
      const amountB = parseFloat(b.quoteAmount);
      return amountA - amountB;
    });
  }

  onLend() {
    this.submitted = true;
    if (this.TenderTakenForm.invalid) {
      this.showError();
    }
    else {
      console.log(this.TenderTakenForm.value);
      this.takeservice.posttenderstaken(this.TenderTakenForm.value).subscribe({
        next: (res) => {
          this.showSuccess();
        },
        error: (err) => {
          console.log(err);
        }
      });
      this.takeservice.postmail(this.TenderTakenForm.value).subscribe(
        (mail) => { });
    }
  }
}