import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {CarouselModule} from '../carousel/carousel.module';
import {ProductsModule} from '../products/products.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CarouselModule,
    ProductsModule
  ]
})
export class HomeModule { }
