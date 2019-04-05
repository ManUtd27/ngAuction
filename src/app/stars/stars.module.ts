import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars.component';

@NgModule({
  declarations: [StarsComponent],
  exports: [
    StarsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarsModule { }
