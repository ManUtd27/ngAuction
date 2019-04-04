import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductItemComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
