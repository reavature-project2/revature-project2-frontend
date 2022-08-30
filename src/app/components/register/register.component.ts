import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname: string = '';
  lname: string = '';
  email: string = '';
  age: number = 0;
  dlnum: string = '';
  password: string = '';
  cpassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.age < 20) {
      this.errorMessage = "Must Be 20 Or Older To Register";
      return
    } else if (this.password !== this.cpassword) {
      this.errorMessage = "Passwords Do Not Match";
      return
    }else if (!this.fname.trim() || !this.lname.trim() || !this.password.trim() || !this.email.trim() || !this.dlnum.trim()) {
      this.errorMessage = "Certain Field Is Empty";
      return
    }
    else {
      // let user: User = new User(this.fname, this.lname, this.email, this.age, this.dlnum, this.password)
      this.authService.register(this.fname, this.lname, this.email, this.age, this.dlnum, this.password).subscribe({
        next: (response) => {
          let token = response.headers.get('rolodex-token');
          sessionStorage.setItem('token', token);
          this.route.navigate(['home'])
        },
        error: (error) => {
          // this.authService.errorStatus
          // console.log(this.authService.errorStatus)
          // console.log(typeof error)
          // console.log(error === '409')
          // alert('')
          // if(error === '409'){
          //   this.errorMessage = "Email Already Exist"
          // }else if(error === '410'){
          //   this.errorMessage = "Drivers License Already Exist"
          // }
        }
      })
    }
  }

}
