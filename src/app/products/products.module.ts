import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductsRoutingModule} from './products-routing.module';
import {StarsModule} from '../stars/stars.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ProductItemComponent, ProductDetailComponent],
  exports: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StarsModule,
    SharedModule
  ]
})
export class ProductsModule { }
