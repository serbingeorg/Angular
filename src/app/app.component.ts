import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  template: `
    <div class ='col-xs-8 col-xs-offset-2' >
    <h1>{{asyncTitle | async }}</h1>
      <input type="text" class="form-control" [(ngModel)]="searchCar">
      <button class="btn btn-primary" (click)="addCar()">Add</button>
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


  asyncTitle = of('Async title 3seconds').pipe(delay(3000));

  addCar() {
    this.cars.push({
      name: 'NewCar',
      descr: 'WFM'
    });
  }

}
