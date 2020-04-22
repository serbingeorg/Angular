import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class ='col-xs-8 col-xs-offset-2' >
      <input type="text" class="form-control" [(ngModel)]="searchCar">
     <hr>
     <ul class="list-group">
       <li class="list-group-item"
        *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index"
        ><b>{{i + 1}}</b> {{car.name}}<i> {{car.descr}}</i></li>
     </ul>
      </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    { name: 'Ford', descr: 'WMF 1' },
    { name: 'Mazda', descr: 'WMF 2' },
    { name: 'Bently', descr: 'WMF 3' },
    { name: 'Audi', descr: 'WMF 4' },
    { name: 'Mercedes', descr: 'WMF 5' },
    { name: 'BMW', descr: 'WMF 6' }
  ];
}
