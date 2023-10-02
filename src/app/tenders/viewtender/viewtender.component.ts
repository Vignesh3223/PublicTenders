import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenderService } from 'src/services/tender.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-viewtender',
  templateUrl: './viewtender.component.html',
  styleUrls: ['./viewtender.component.css']
})
export class ViewtenderComponent implements OnInit {

  tenderId: number | any;
  tenderdata: any;

  constructor(
    private tenderserv: TenderService,
    private categoryserv: CategoryService,
    private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.tenderId = this.actRoute.snapshot.params['id'];

    this.categoryserv.getCategories().subscribe((categories) => {
      const categoryList = categories;
      this.tenderserv.getTenderbyId(this.tenderId).subscribe((tenders) => {
        this.tenderdata = tenders;
        this.tenderdata.forEach((tender: any) => {
          const matchingCategory = categoryList.find((category) => category.categoryId === tender.categoryId);
          if (matchingCategory) {
            tender.categoryName = matchingCategory.categoryName;
          }
        });
        console.log(this.tenderdata);
      });
    });
  }

}
