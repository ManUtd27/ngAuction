import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CarouselComponent],
  exports: [
    CarouselComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CarouselModule { }
