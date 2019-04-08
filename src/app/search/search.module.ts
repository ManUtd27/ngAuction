import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  exports: [
    SearchComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SearchModule { }
