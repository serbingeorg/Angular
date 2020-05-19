import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:quotemark
import { map } from "rxjs/operators";




@Injectable()
export class CarsService {
    constructor(private http: HttpClient) { }

    getCars() {
        return this.http.get('http://localhost:3000/cars')
            .pipe(map(res => res));
    }


    addCar(carName: string) {
        const data = {
            name: carName,
            color: 'blue'
        };
        return this.http.post('http://localhost:3000/cars', data)
            .pipe(map(res => res));
    }

    changeColor(car: any, color: string) {
        car.color = color;
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
            .pipe(map(res => res));
    }
}
