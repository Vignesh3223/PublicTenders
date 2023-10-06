import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envionment';
import { UserService } from 'src/services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Login } from 'src/models/login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hide = true;

  userapi = environment.userurl;

  loginapi = environment.loginurl;

  LoginForm: FormGroup | any;
  email: FormControl | any;
  password: FormControl | any;

  submitted = false;

  constructor(
    private router: Router,
    private httpclient: HttpClient,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.email = new FormControl('',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]);
    this.password = new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14),
        //Validators.pattern('(?=.*[$@^!%*?&]),(?=.*[A-Za-z0-9])')
      ]);
    this.LoginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Success' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all the details' });
  }

  showUserError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not found' });
  }

  onLogin() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      this.showError();
    }
    else {
      this.httpclient.post<Login>(this.loginapi, this.LoginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          var user = `${res.userid}`;
          var role = `${res.roleId}`;
          var token = res.token;
          var companyname = res.companyname;
          var prop = res.proprieator;
          var estd = res.establishedDate
          var profile = res.profilePic;
          var email = res.email;
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('user', user);
          localStorage.setItem('cname', companyname);
          localStorage.setItem('email', email);
          localStorage.setItem('proprieator', prop);
          localStorage.setItem('establishedDate', estd);
          localStorage.setItem('profile', profile);
          this.showSuccess();
          setTimeout(() => { this.router.navigate(['']); }, 1000);
        },
        error: (res) => {
          console.log(res);
          this.showUserError();
        }
      });
    }
  }
}
