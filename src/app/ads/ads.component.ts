import { Component, OnInit } from '@angular/core';
import { Ads } from 'src/models/ads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdsService } from 'src/services/ads.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  postAdForm: FormGroup | any;
  adTitle: FormControl | any;
  adPoster: FormControl | any;

  submitted = false;

  public response!: { dbPath: '' };

  constructor(private adsserv: AdsService,
    private messageService: MessageService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.adTitle = new FormControl('', [Validators.required]);
    this.adPoster = new FormControl('', [Validators.required]);

    this.postAdForm = new FormGroup({
      adTitle: this.adTitle,
      adPoster: this.adPoster
    });
  }

  public uploadFinished = (event: any) => {
    this.response = event;
    this.adPoster.setValue(this.response.dbPath);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ad Posted Successfully' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Posting Ad Failed' });
  }

  onPost() {
    this.submitted = true;
    console.log(this.postAdForm.value)
    if (this.postAdForm.invalid) {
      this.showError();
    }

    else {
      this.adsserv.postAds(this.postAdForm.value).subscribe({
        next: (res) => {
          this.showSuccess();
          setTimeout(() => { this.router.navigate(['/']); }, 1000);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

}
