import { Component } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [];


  constructor(private carsServise: CarsService) { }

  loadCars() {
    this.carsServise.getCars().subscribe((response) => {
      console.log(response);
    });
  }
}
