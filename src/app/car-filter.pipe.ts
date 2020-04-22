import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string) {
    console.log('Filter pipe started');
    if (carList.lenght === 0 || searchStr === '') {
      return carList;
    }
    // tslint:disable-next-line:align
    return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);

  }

}
