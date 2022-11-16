import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] | undefined;

  constructor(
    private carService: CarService,
    private location: Location  
  ) { }

  ngOnInit() { 
    this.getCars();
  }

  getCars(): void { 
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  goBack(): void { 
    this.location.back();
  }

}
