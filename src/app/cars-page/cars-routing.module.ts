import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';

const carsRoutes: Routes = [
    {
        path: '', component: CarsPageComponent, children: [
            { path: ':id/:name', component: CarPageComponent }
        ]
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(carsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CarsRoutingMOdule { }
