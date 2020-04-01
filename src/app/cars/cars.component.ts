import { Component } from '@angular/core';

@Component({

  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddcar = false;

  constructor() {
    setTimeout(() => {
      this.canAddcar = true;
    }, 4000);
  }

}
