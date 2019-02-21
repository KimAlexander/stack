import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'p-search',
    templateUrl: './p.search.component.html',
    styleUrls: ['./p.search.component.scss']
})

export class PSearchComponent {
  public query: string;
  public name: string;

  constructor (private router: Router) {}

  onClickSearch() {
    this.router.navigate(
      ['/results'], { queryParams: {query: this.name} }
    )
  }
}
