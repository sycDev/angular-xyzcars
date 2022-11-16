import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) { }

  ngOnInit(){ 
    this.getCar();
  }

  getCar(): void { 
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(id).subscribe(car => this.car = car);
  }

  goBack(): void { 
    this.location.back();
  }

}
