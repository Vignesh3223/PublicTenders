import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorylist: any;

  constructor(
    private categoryserv:CategoryService,
    ){}

    ngOnInit(): void {
      this.categoryserv.getCategories().subscribe(
        (response) => {
          this.categorylist = response;
          console.log(response);
        }
      )
    }
}
