import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const authservice = Inject(AuthService);
  const alertservice = Inject(MessageService);

  if (authservice.isLoggedIn()) {
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
