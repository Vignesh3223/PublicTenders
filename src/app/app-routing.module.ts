import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { TendersComponent } from './tenders/tenders.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
