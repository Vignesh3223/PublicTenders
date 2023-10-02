import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { TenderService } from 'src/services/tender.service';
import { Tenders } from 'src/models/tenders';
import { CategoryService } from 'src/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})

export class TendersComponent implements OnInit {

  tenderslist: Tenders | any;

  categorylist: Category | any;

  tenderId!: number;

  selectedCategory: string | any;

  searchText = '';

  sortParam: any;
  sortDirection: any;
  optionSelected: any;

  constructor(private tenderserv: TenderService,
    private categoryserv: CategoryService,
    private route: Router) { }

  ngOnInit(): void {
    this.categoryserv.getCategories().subscribe((categories) => {
      const categoryList = categories;
      this.tenderserv.getTenders().subscribe((tenders) => {
        this.tenderslist = tenders;
        this.tenderslist.forEach((tender: any) => {
          const matchingCategory = categoryList.find((category) => category.categoryId === tender.categoryId);
          if (matchingCategory) {
            tender.categoryName = matchingCategory.categoryName;
          }
        });
        console.log(this.tenderslist);
      });
    });
  }

  viewTender(id: number) {
    this.tenderId = id;
    this.route.navigate(['viewtender/' + id]);
  }

  onOptionsSelected(event: any) {
    console.log(event.target.value);
    this.optionSelected = event.target.value;
    this.sortParam = 'tenderClosingDate';
    this.sortDirection = 'asc';
    if (this.optionSelected === 'f-n') {
      (this.sortParam = 'duedate'), (this.sortDirection = 'desc');
    }
  }

}
