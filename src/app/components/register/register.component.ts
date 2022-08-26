import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname: string = "";
  lname: string = "";
  email: string = "";
  age: number = 0;
  dlnum: string = "";
  password: string = "";
  cpassword: string = "";
  errorMessage: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    if(this.age < 20){
      this.errorMessage = "You Are Too Young"
    }else if(this.password !== this.cpassword){
      this.errorMessage = "Passwords Do Not Match"
    }else{
      console.log("Success");
    }
  }

}
