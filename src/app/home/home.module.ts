import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CarouselModule} from '../carousel/carousel.module';
import {ProductsModule} from '../products/products.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselModule,
    ProductsModule
  ]
})
export class HomeModule { }
