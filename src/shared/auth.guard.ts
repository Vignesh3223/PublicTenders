import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.messageService.add({
        key: 'tc',
        severity: 'error',
        summary: 'Please Login to Continue'
      });
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
