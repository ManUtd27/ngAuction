import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Component, OnInit} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Product, ProductService} from '../shared/services';

@Component({
  selector: 'nga-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
   columns$: Observable<number>;
   products$: Observable<Product[]>;

  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5],
  ]);

  constructor(private media: MediaObserver, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();

    this.columns$ = this.media.asObservable()
      .pipe(
        map(mc => this.breakpointsToColumnsNumber.get(String(mc[0].mqAlias)))
      );
  }


}
