import { Component } from '@angular/core';

@Component({

  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';
  inputText = '';

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'The car added!';
  }

  onKeyUp(event) {

    this.inputText = event.target.value;
  }

}
