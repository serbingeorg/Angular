import { CarsService } from './cars.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarsService]
})

export class AppComponent implements OnInit {

  cars = [];
  constructor(private service: CarsService) { }

  ngOnInit() {
    this.cars = this.service.cars;
  }


}
