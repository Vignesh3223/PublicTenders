import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { Users } from 'src/models/users';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;

  public response!: { dbPath: '' };

  userapi = environment.userurl;

  RegisterForm: FormGroup | any;
  companyname: FormControl | any;
  proprieator: FormControl | any;
  email: FormControl | any;
  address: FormControl | any;
  contactnumber: FormControl | any;
  companysector: FormControl | any;
  establisheddate: FormControl | any;
  gstin: FormControl | any;
  crn: FormControl | any;
  password: FormControl | any;
  profilePic: FormControl | any;

  logged: boolean | any;
  submitted = false;

  constructor(
    private httpclient: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.companyname = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z. ]*')]);
    this.proprieator = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]*')]);
    this.email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
    this.address = new FormControl('', [Validators.required]);
    this.contactnumber = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
    this.companysector = new FormControl('', [Validators.required]);
    this.establisheddate = new FormControl('', [Validators.required]);
    this.gstin = new FormControl('', [Validators.required, Validators.pattern('[A-za-z0-9]*')]);
    this.crn = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
    this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]);
    this.profilePic = new FormControl('');

    this.RegisterForm = new FormGroup({
      companyname: this.companyname,
      proprieator: this.proprieator,
      email: this.email,
      address: this.address,
      contactnumber: this.contactnumber,
      companysector: this.companysector,
      establisheddate: this.establisheddate,
      gstin: this.gstin,
      crn: this.crn,
      password: this.password,
      profilePic: this.profilePic
    });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Signed Up Successfully' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all the details' });
  }

  public uploadFinished = (event:any) => {
    this.response = event;
    this.profilePic.setValue(this.response.dbPath);
  }

  onRegister() {
    this.submitted = true;
    console.log(this.RegisterForm.value)
    if (this.RegisterForm.invalid) {
      this.showError();
    }
    
    else {
      this.httpclient.post<Users>(this.userapi + '/' + 'PostUser', this.RegisterForm.value).subscribe({
        next: (res) => {
          this.showSuccess();
          setTimeout(() => { this.router.navigate(['/signin']); }, 1000);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

}
