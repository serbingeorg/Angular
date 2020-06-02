import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:quotemark
import { map, catchError, delay } from "rxjs/operators";

import { Observable, throwError } from 'rxjs';




@Injectable()
export class CarsService {
    constructor(private http: HttpClient) { }

    getAppTitle() {
        return this.http.get('http://localhost:3000/title')
            .pipe(delay(3000))
            .pipe(map(res => res))
            .pipe(map(data => data.value));
    }
    getCars() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8'
        });
        // tslint:disable-next-line:object-literal-shorthand
        return this.http.get('http://localhost:3000/cars', { headers: headers })
            .pipe(map(res => res))
            .pipe(catchError(this.handleError));
    }
    // tslint:disable-next-line:ban-types
    handleError() {
        return throwError('Server doesn"t work');
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
    deleteCar(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
            .pipe(map(res => res));
    }

}
