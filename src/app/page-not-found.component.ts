import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-page-not-found',
  template: `
    <h1>This is not the page you were looking for!</h1>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
