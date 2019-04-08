import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarouselModule} from './carousel/carousel.module';
import {FooterModule} from './footer/footer.module';
import {HomeModule} from './home/home.module';
import {NavbarModule} from './navbar/navbar.module';
import {ProductsModule} from './products/products.module';
import {StarsModule} from './stars/stars.module';
import {SearchModule} from './search/search.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    FooterModule,
    HomeModule,
    NavbarModule,
    ProductsModule,
    SearchModule,
    StarsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
