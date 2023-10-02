import { Injectable } from '@angular/core';
import { environment } from 'src/environments/envionment';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category = environment.categoryurl;

  constructor(private httpclient: HttpClient) { }

  getCategories() {
    return this.httpclient.get<Category[]>(this.category);
  }
  
}
