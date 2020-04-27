import { CarsService } from './../cars.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  carName = '';

  constructor(private servive: CarsService) { }

  addCar() {
    this.servive.addCar(this.carName);
    this.carName = '';
  }

}
