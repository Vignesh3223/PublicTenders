import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { TenderService } from 'src/services/tender.service';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/models/category';
import { Tenders } from 'src/models/tenders';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/envionment';

@Component({
  selector: 'app-publishtenders',
  templateUrl: './publishtenders.component.html',
  styleUrls: ['./publishtenders.component.css']
})
export class PublishtendersComponent implements OnInit {

  tenderapi = environment.tendersurl;

  categorylist: Category | any;
  selectedCategory: Category | null = null;

  TenderForm: FormGroup | any;
  tendername: FormControl | any;
  referencenumber: FormControl | any;
  description: FormControl | any;
  categoryid: FormControl | any;
  projectvalue: FormControl | any;
  location: FormControl | any;
  authority: FormControl | any;
  projectstartdate: FormControl | any;
  projectenddate: FormControl | any;
  applicationfee: FormControl | any;

  submitted = false;

  constructor(
    private httpclient: HttpClient,
    private messageService: MessageService,
    private tenderserv: TenderService,
    private categoryserv: CategoryService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.tendername = new FormControl('', [Validators.required]);
    this.referencenumber = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.categoryid = new FormControl('', [Validators.required]);
    this.projectvalue = new FormControl('', [Validators.required]);
    this.location = new FormControl('', [Validators.required]);
    this.authority = new FormControl('', [Validators.required]);
    this.projectstartdate = new FormControl('', [Validators.required]);
    this.projectenddate = new FormControl('', [Validators.required]);
    this.applicationfee = new FormControl('', [Validators.required]);

    this.TenderForm = new FormGroup({
      tendername: this.tendername,
      referencenumber: this.referencenumber,
      description: this.description,
      categoryid: this.categoryid,
      projectvalue: this.projectvalue,
      location: this.location,
      authority: this.authority,
      projectstartdate: this.projectstartdate,
      projectenddate: this.projectenddate,
      applicationfee: this.applicationfee
    });

    this.categoryserv.getCategories().subscribe(
      (res) => {
        this.categorylist = res;
        console.log(this.categorylist);
      });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tender Published Successfully' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all the details' });
  }

  onPost() {
    this.submitted = true;
    if (this.TenderForm.invalid) {
      this.showError();
    }
    else {
      this.tenderserv.postTender(this.TenderForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.showSuccess();
          this.TenderForm.reset();
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
