import { Component } from '@angular/core';
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
export class AppComponent {
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'

  ];
  cars: Cars[] = [];
  carName = '';


  constructor(private carsServise: CarsService) { }

  loadCars() {
    this.carsServise.getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      },
        (error) => { alert(error); });
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
