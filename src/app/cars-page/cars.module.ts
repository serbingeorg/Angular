import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from './../cars.service';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page.component';
import { CarsRoutingMOdule } from './cars-routing.module';

@NgModule({
    declarations: [
        CarsPageComponent,
        CarPageComponent
    ],
    imports: [
        CommonModule,
        CarsRoutingMOdule,
        SharedModule
    ],
    providers: [CarsService]
})
export class CarsModule { }
