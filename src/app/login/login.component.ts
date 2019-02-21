import { Component } from '@angular/core';
import { FetchData } from '../query.service';
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent { 
  login: string;
  password: string;
  constructor(private query: FetchData, private router: Router) {}

  onFormSubmit() {
    this.query.login({
      email: this.login,
      password: this.password
    })
    .subscribe(res => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', res.email);
      
      this.router.navigate(['/'])
    })
  }
}
