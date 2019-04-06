import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuctionMaterialModule} from '../auction-material/auction-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuctionMaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    AuctionMaterialModule
  ]
})
export class SharedModule { }
