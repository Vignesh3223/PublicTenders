import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      const itemTitle = item.tenderName.toLowerCase();
      const itemLocation = item.location.toLowerCase();
      return itemTitle.includes(searchText) || itemLocation.includes(searchText);
    });
  }

}
