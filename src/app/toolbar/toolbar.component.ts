import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'toolbar-info',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent { 
  userEmail: string;
  isLoggedIn: string

  constructor(private router: Router, private location: Location) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(this.updateData.bind(this))
  }

  updateData () {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.userEmail = localStorage.getItem('userEmail')
  }

  logOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login'])
  }
}