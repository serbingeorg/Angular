import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';




interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'

  ];
  cars: any;
  carName = '';
  appTitle;


  constructor(private carsServise: CarsService) { }

  ngOnInit() {
    this.appTitle = this.carsServise.getAppTitle();
  }

  loadCars() {
    this.cars = this.carsServise.getCars();
  }

  addCar() {
    this.carsServise.addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsServise.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsServise.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

}
