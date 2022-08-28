import { AppComponent } from './../../app.component';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Car } from 'src/app/models/car';
import { Router, RouterLink } from '@angular/router';
import { RentalComponent } from '../rental/rental.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  title = 'Home Page'
  sedan1: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  sedan2: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  suv1: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  suv2: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  truck1: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  truck2: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  van1: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  van2: Car = new Car('A', 'A', 0, 'A', 0, 'A')
  clientMessage: ClientMessage = new ClientMessage('');
  


  constructor(private apiService: ApiService, public appComponent: AppComponent, private router: Router) { }

  getSuvs() {
    this.apiService.getSuvList()
    .subscribe({
      next: (data) => {
        this.suv1.make = data[0].make;
        this.suv1.model = data[0].model;
        this.suv1.v_Year = data[0].year;
        this.suv1.v_Class = data[0].class;
        this.suv1.combination_mpg = data[0].combination_mpg;
        this.suv1.trans = data[0].transmission;
        this.suv2.make = data[1].make;
        this.suv2.model = data[1].model;
        this.suv2.v_Year = data[1].year;
        this.suv2.v_Class = data[1].class;
        this.suv2.combination_mpg = data[1].combination_mpg;
        this.suv2.trans = data[1].transmission;
        console.log(data);
      },
      error: () => this.clientMessage.message = `Could not find vehicle.`,
      complete: () => console.log('complete')
    })
  }

  getTrucks() {
    this.apiService.getTruckList()
    .subscribe({
      next: (data) => {
        this.truck1.make = data[0].make;
        this.truck1.model = data[0].model;
        this.truck1.v_Year = data[0].year;
        this.truck1.v_Class = data[0].class;
        this.truck1.combination_mpg = data[0].combination_mpg;
        this.truck1.trans = data[0].transmission;
        this.truck2.make = data[1].make;
        this.truck2.model = data[1].model;
        this.truck2.v_Year = data[1].year;
        this.truck2.v_Class = data[1].class;
        this.truck2.combination_mpg = data[1].combination_mpg;
        this.truck2.trans = data[1].transmission;
        console.log(data);
      },
      error: () => this.clientMessage.message = `Could not find vehicle.`,
      complete: () => console.log('complete')
    })
  }

  getVans() {
    this.apiService.getVanList()
    .subscribe({
      next: (data) => {
        this.van1.make = data[0].make;
        this.van1.model = data[0].model;
        this.van1.v_Year = data[0].year;
        this.van1.v_Class = data[0].class;
        this.van1.combination_mpg = data[0].combination_mpg;
        this.van1.trans = data[0].transmission;
        this.van2.make = data[1].make;
        this.van2.model = data[1].model;
        this.van2.v_Year = data[1].year;
        this.van2.v_Class = data[1].class;
        this.van2.combination_mpg = data[1].combination_mpg;
        this.van2.trans = data[1].transmission;
        console.log(data);
      },
      error: () => this.clientMessage.message = `Could not find vehicle.`,
      complete: () => console.log('complete')
    })
  }

  getSedans() {
    this.apiService.getSedanList()
    .subscribe({
      next: (data) => {
        this.sedan1.make = data[0].make;
        this.sedan1.model = data[0].model;
        this.sedan1.v_Year = data[0].year;
        this.sedan1.v_Class = data[0].class;
        this.sedan1.combination_mpg = data[0].combination_mpg;
        this.sedan1.trans = data[0].transmission;
        this.sedan2.make = data[1].make;
        this.sedan2.model = data[1].model;
        this.sedan2.v_Year = data[1].year;
        this.sedan2.v_Class = data[1].class;
        this.sedan2.combination_mpg = data[1].combination_mpg;
        this.sedan2.trans = data[1].transmission;
        console.log(data);
      },
      error: () => this.clientMessage.message = `Could not find vehicle.`,
      complete: () => console.log('complete')
    })
  }

  sedanOne() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 's1');
    this.router.navigate(['/rental']);
  }

  sedanTwo() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 's2');
    this.router.navigate(['/rental']);
  }

  suvOne() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 'su1');
    this.router.navigate(['/rental']);
  }

  suvTwo() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 'su2');
    this.router.navigate(['/rental']);
  }

  truckOne() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 't1');
    this.router.navigate(['/rental']);
  }

  truckTwo() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 't2');
    this.router.navigate(['/rental']);
  }

  vanOne() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 'v1');
    this.router.navigate(['/rental']);
  }

  vanTwo() {
    sessionStorage.setItem('token', '3dsjas83hfa8dsfh38asdhfhas');
    sessionStorage.setItem('vehicle', 'v2');
    this.router.navigate(['/rental']);
  }

  ngOnInit(): void {
    this.getSedans();
    this.getSuvs();
    this.getTrucks();
    this.getVans();
  }

}
