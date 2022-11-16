import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars-list';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  // return the list of cars from mock-cars-list data
  getCars(): Observable<Car[]> { 
    return of(CARS);
  }

  // return the detail of a single car by id when clicked
  getCarById(id: number): Observable<Car | undefined> { 
    return of(CARS.find(car => car.id === id));
  }

}
