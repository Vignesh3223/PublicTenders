import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { TendersComponent } from './tenders/tenders.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { TenderstakenComponent } from './tenderstaken/tenderstaken.component';
import { PublishtendersComponent } from './tenders/publishtenders/publishtenders.component';
import { ViewtenderComponent } from './tenders/viewtender/viewtender.component';
import { ViewqoutationsComponent } from './quotations/viewqoutations/viewqoutations.component';
import { UploadComponent } from './upload/upload.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { AdsComponent } from './ads/ads.component';
import { FooterComponent } from './footer/footer.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';

import { FilterPipe } from '../shared/filter.pipe';
import { SearchPipe } from '../shared/search.pipe';
import { SortdatePipe } from '../shared/sortdate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    SigninComponent,
    SignupComponent,
    CategoryComponent,
    TendersComponent,
    QuotationsComponent,
    TenderstakenComponent,
    PublishtendersComponent,
    FooterComponent,
    ViewtenderComponent,
    FilterPipe,
    SearchPipe,
    SortdatePipe,
    ViewqoutationsComponent,
    UploadComponent,
    ViewuserComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    TableModule,
    MatSelectModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,
    PaginatorModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
