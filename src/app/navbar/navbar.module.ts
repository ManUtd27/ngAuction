import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class NavbarModule { }
