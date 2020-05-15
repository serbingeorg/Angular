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
}
