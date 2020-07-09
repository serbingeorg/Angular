import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes = [

    { path: '', component: HomePageComponent },
    { path: 'cars', loadChildren: () => import('./cars-page/cars.module').then(m => m.CarsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
