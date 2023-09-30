import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = Inject(Router);
  const alertservice = Inject(MessageService);

  if (token) {
    return true;
  }
  else {
    alertservice.add({
      key: "tc",
      severity: "error",
      summary: "Plese Login to Continue"
    });
    router.navigate(['/signin']);
    return false;
  }
};
