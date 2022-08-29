import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientMessage } from './../../models/client-message';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/services/api.service';
import { Car } from 'src/app/models/car';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  selectedCar: Car = new Car('A', 'A', 0, 'A', 'A');
  clientMessage: ClientMessage = new ClientMessage('');
  rentDate: string = '';
  rentDateU;
  returnDate: string = '';
  returnDateU;
  rentalInfo: Array<any> = [];
  days: number;
  carImg: string = '';
  price: number = 0;
  calc: number = 0;
  billing: number;
  ins: boolean = false;

  constructor(private apiService: ApiService, public appComponent: AppComponent, private router: Router) { }

  sendInfo() {
    this.rentalInfo.push({"rent_Date" : this.rentDateU})
    this.rentalInfo.push({"return_Date" : this.returnDateU})
    this.rentalInfo.push({"rent_price" : this.price})
    this.rentalInfo.push({"car_make" : this.selectedCar.make})
    this.rentalInfo.push({"car_model" : this.selectedCar.model})
    this.rentalInfo.push({"car_year" : this.selectedCar.v_Year})
    this.rentalInfo.push({"car_class" : this.selectedCar.v_Class})
    // this.rentalInfo.push({"mpg" : this.selectedCar.combination_mpg})
    this.rentalInfo.push({"car_trans" : this.selectedCar.trans})

    console.log(this.rentalInfo)
    this.apiService.sendRental(this.rentalInfo)
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => this.clientMessage.message = `Could not find vehicle.`,
      complete: () => console.log('complete')
    })
  }
  
  priceChange() {
    let car = sessionStorage.getItem('vehicle')
    if(car === 's1' || car === 's2') {
      this.calc = this.days * 30;
      this.price = this.calc;
      if(this.ins) {
        this.price += 40;
      }
    } else if(car === 'v1' || car === 'v2') {
      this.calc = this.days * 40;
      this.price = this.calc;
      if(this.ins) {
        this.price += 40;
      }
    } else if(car === 'su1' || car === 'su2') {
      this.calc = this.days * 45;
      this.price = this.calc;
      if(this.ins) {
        this.price += 40;
      }
    } else {
      this.calc = this.days * 50;
      this.price = this.calc;
      if(this.ins) {
        this.price += 40;
      }
    }
  }

  calculatePrice() {
    this.days = (this.returnDateU - this.rentDateU) / 86400
    this.priceChange()
    console.log(this.days)
  }

  setRentDate() {
    let currentDate = new Date(this.rentDate);
    this.rentDateU = currentDate.getTime()/1000;
    if(this.returnDateU)
      this.calculatePrice()
    console.log(this.rentDateU)
  }

  setReturnDate() {
    let currentDate = new Date(this.returnDate);
    this.returnDateU = currentDate.getTime()/1000;
    if(this.rentDateU)
      this.calculatePrice()
    console.log(this.returnDateU)
  }

  setInsurance() {
    this.ins = !this.ins;
    if(this.ins == true) {
      this.price += 40;
    } else {
      this.price -= 40;
    }
    console.log(this.ins)
  }

  sessVar() {
    let car = sessionStorage.getItem('vehicle')
    if(car === 'v2') {
      this.carImg = '../../../assets/volkswagen-vanagon-m.jpg'
      this.apiService.getVanList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[1].make;
          this.selectedCar.car_model = data[1].model;
          this.selectedCar.car_year = data[1].year;
          this.selectedCar.car_class = data[1].class;
          // this.selectedCar.combination_mpg = data[1].combination_mpg;
          this.selectedCar.car_trans = data[1].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 's1') {
      this.carImg = '../../../assets/volkswagen-passat-a.jpg'
      this.apiService.getSedanList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[0].make;
          this.selectedCar.car_model = data[0].model;
          this.selectedCar.car_year = data[0].year;
          this.selectedCar.car_class = data[0].class;
          // this.selectedCar.combination_mpg = data[0].combination_mpg;
          this.selectedCar.car_trans = data[0].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 's2') {
      this.carImg = '../../../assets/volkswagen-passat-m.jpg'
      this.apiService.getSedanList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[1].make;
          this.selectedCar.car_model = data[1].model;
          this.selectedCar.car_year = data[1].year;
          this.selectedCar.car_class = data[1].class;
          // this.selectedCar.combination_mpg = data[1].combination_mpg;
          this.selectedCar.car_trans = data[1].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 'su1') {
      this.carImg = '../../../assets/mazda-navajo-a.jpg'
      this.apiService.getSuvList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[0].make;
          this.selectedCar.car_model = data[0].model;
          this.selectedCar.car_year = data[0].year;
          this.selectedCar.car_class = data[0].class;
          // this.selectedCar.combination_mpg = data[0].combination_mpg;
          this.selectedCar.car_trans = data[0].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 'su2') {
      this.carImg = '../../../assets/mazda-navajo-m.jpg'
      this.apiService.getSuvList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[1].make;
          this.selectedCar.car_model = data[1].model;
          this.selectedCar.car_year = data[1].year;
          this.selectedCar.car_class = data[1].class;
          // this.selectedCar.combination_mpg = data[1].combination_mpg;
          this.selectedCar.car_trans = data[1].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 't1') {
      this.carImg = '../../../assets/ford-f150-a.jpg'
      this.apiService.getTruckList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[0].make;
          this.selectedCar.car_model = data[0].model;
          this.selectedCar.car_year = data[0].year;
          this.selectedCar.car_class = data[0].class;
          // this.selectedCar.combination_mpg = data[0].combination_mpg;
          this.selectedCar.car_trans = data[0].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 't2') {
      this.carImg = '../../../assets/ford-f150-m.jpg'
      this.apiService.getTruckList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[1].make;
          this.selectedCar.car_model = data[1].model;
          this.selectedCar.car_year = data[1].year;
          this.selectedCar.car_class = data[1].class;
          // this.selectedCar.combination_mpg = data[1].combination_mpg;
          this.selectedCar.car_trans = data[1].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    } else if(car === 'v1') {
      this.carImg = '../../../assets/volkswagen-vanagon-a.jpg'
      this.apiService.getVanList()
      .subscribe({
        next: (data) => {
          this.selectedCar.car_make = data[0].make;
          this.selectedCar.car_model = data[0].model;
          this.selectedCar.car_year = data[0].year;
          this.selectedCar.car_class = data[0].class;
          // this.selectedCar.combination_mpg = data[0].combination_mpg;
          this.selectedCar.car_trans = data[0].transmission;
          console.log(data);
        },
        error: () => this.clientMessage.message = `Could not find vehicle.`,
        complete: () => console.log('complete')
      })
    }    
  }

  ngOnInit(): void {
    this.sessVar()
  }

}
