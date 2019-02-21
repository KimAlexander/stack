import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';

import { PSearchComponent }  from './p.search/p.search.component';
import { ResultsComponent }  from './results/results.component';
import { AnswersComponent }  from './answers/answers.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';

import { filter } from 'rxjs/operators';

const appRoutes: Routes = [
  { path: '', component: PSearchComponent},
  { path: 'results', component: ResultsComponent },
  { path: 'answers', component: AnswersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
  constructor (private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .pipe(
        filter(
          (event: NavigationStart) => {
            return !(['/login', '/register'].indexOf(event.url) !== -1)
          }
        )
      )
      .subscribe((event: NavigationStart) => {
        if (!localStorage.getItem('isLoggedIn') ) {
          this.router.navigate(['/login'])
        }
      });
  }
}
