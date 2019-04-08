import { NgModule } from '@angular/core';
import { StarsComponent } from './stars.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [StarsComponent],
  exports: [
    StarsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class StarsModule { }
