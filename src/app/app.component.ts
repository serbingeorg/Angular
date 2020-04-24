import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  cars = [
    {
      name: 'Ford',
      isSolid: false
    },
    {
      name: 'Mazda',
      isSolid: true
    },
    {
      name: 'Mercedes',
      isSolid: false
    }
  ];

  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSolid: false
    });
  }
}
