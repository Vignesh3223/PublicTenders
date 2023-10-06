import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { TendersComponent } from './tenders/tenders.component';
import { PublishtendersComponent } from './tenders/publishtenders/publishtenders.component';
import { ViewtenderComponent } from './tenders/viewtender/viewtender.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { ViewqoutationsComponent } from './quotations/viewqoutations/viewqoutations.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { authGuard } from 'src/shared/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'tenders', component: TendersComponent
  },
  {
    path: 'publishtenders', component: PublishtendersComponent
  },
  {
    path: 'viewTender/:tenderId', component: ViewtenderComponent
  },
  {
    path: 'quotations', component: QuotationsComponent
  },
  {
    path: 'viewQuotations/:tenderid', component: ViewqoutationsComponent
  },
  {
    path: 'viewUser/:userId', component: ViewuserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
