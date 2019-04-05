import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductsRoutingModule} from './products-routing.module';
import {StarsModule} from '../stars/stars.module';

@NgModule({
  declarations: [ProductItemComponent, ProductDetailComponent],
  exports: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StarsModule
  ]
})
export class ProductsModule { }
