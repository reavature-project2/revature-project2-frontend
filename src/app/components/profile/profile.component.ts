import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
pastRentalInfo: any[] =[1];
currentRentalInfo: any[] =[1];
futureRentalInfo: any[] =[1];
showField: boolean = false;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  setShowField(){
    this.showField = !this.showField
  }

  getRentals(){
    const todaysDate = new Date()
    let unixDate = Math.floor(todaysDate.getTime()/1000)
    console.log(unixDate);
    this.apiService.getRentals().subscribe({
      next:(response)=>{
        response.forEach(rental =>{
          if(rental.returnDate < unixDate){
            this.pastRentalInfo.push(rental);
          }else if(rental.returnDate > unixDate){
            this.currentRentalInfo.push(rental);
          }else if(rental.startDate > unixDate){
            this.futureRentalInfo.push(rental);
          }
        })
      }
    })
  }
}
