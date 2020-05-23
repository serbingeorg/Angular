import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:quotemark
import { map } from "rxjs/operators";




@Injectable()
export class CarsService {
    constructor(private http: HttpClient) { }

    getCars() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8'
        });
        // tslint:disable-next-line:object-literal-shorthand
        return this.http.get('http://localhost:3000/cars', { headers: headers })
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
    deleteCar(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
            .pipe(map(res => res));
    }

}
