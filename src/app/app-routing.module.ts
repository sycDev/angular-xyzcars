import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { CarsComponent } from "./cars/cars.component";
import { CarDetailsComponent } from "./car-details/car-details.component";

const routes: Routes = [
  { path: '', component: WelcomeComponentComponent},
  { path: 'cars', component: CarsComponent },
  { path: 'detail/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
