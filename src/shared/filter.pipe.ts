import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tenderslist: any[], selectedCategory: string): any[] {
    if (!selectedCategory) {
      return tenderslist;
    }
    return tenderslist.filter(category => category.categoryName === selectedCategory);
  }

}
