import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {


  // tslint:disable-next-line:no-output-on-prefix
  // tslint:disable-next-line:no-output-rename
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYearInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addCar(carNameEl: HTMLInputElement) {


    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;

  }






}
