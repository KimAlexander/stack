import { Component } from '@angular/core';
import { FetchData } from '../query.service';
import { Router } from '@angular/router'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent { 
  email: string;
  password: string;

  constructor(private query: FetchData, 
              private router: Router) {}

  onFormSubmit() {
    this.query.register({
      email: this.email,
      password: this.password
    })
    .subscribe(res => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', res.email);
      
      this.router.navigate(['/'])
    })
  }
}
