import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from './product.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductService],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
