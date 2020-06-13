import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsService } from './cars.service';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
