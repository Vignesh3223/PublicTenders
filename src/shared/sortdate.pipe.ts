import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortdate'
})
export class SortdatePipe implements PipeTransform {

  transform(tenderslist: any[], args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;
    if (sortDirection === 'desc') {
      multiplier = -1;
    }
    return tenderslist.sort((a, b) => {
      const dateA = new Date(a[sortField]);
      const dateB = new Date(b[sortField]);
      return (dateA.getTime() - dateB.getTime()) * multiplier;
    });
  }

}
