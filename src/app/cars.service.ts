import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

    constructor(private consoleServise: ConsoleService) { }
    cars = [
        {
            name: 'Ford',
            isSolid: false
        },
        {
            name: 'Mazda',
            isSolid: false
        },
        {
            name: 'Mercedes',
            isSolid: false
        }
    ];

    addCar(name: string) {
        this.cars.push({ isSolid: false, name });
        this.consoleServise.log(`Car ${name} was add`);
    }
}
