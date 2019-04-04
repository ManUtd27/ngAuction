import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CarouselModule} from './carousel/carousel.module';
import {FooterModule} from './footer/footer.module';
import {HomeModule} from './home/home.module';
import {NavbarModule} from './navbar/navbar.module';
import {ProductsModule} from './products/products.module';
import {StarsModule} from './stars/stars.module';
import {SearchModule} from './search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CarouselModule,
    FooterModule,
    HomeModule,
    NavbarModule,
    ProductsModule,
    SearchModule,
    StarsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
