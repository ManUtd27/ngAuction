import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    SharedModule
  ]
})
export class FooterModule { }
