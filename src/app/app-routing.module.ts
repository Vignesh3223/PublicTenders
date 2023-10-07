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
import { TenderstakenComponent } from './tenderstaken/tenderstaken.component';
import { AdsComponent } from './ads/ads.component';
import { AuthGuard } from 'src/shared/auth.guard';

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
    path: 'users', component: UsersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'tenders', component: TendersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'publishtenders', component: PublishtendersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'viewTender/:tenderId', component: ViewtenderComponent, canActivate: [AuthGuard]
  },
  {
    path: 'quotations', component: QuotationsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'viewQuotations/:tenderid', component: ViewqoutationsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'viewUser/:userId', component: ViewuserComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tenderstaken', component: TenderstakenComponent, canActivate: [AuthGuard]
  },
  {
    path: 'ads', component: AdsComponent, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
