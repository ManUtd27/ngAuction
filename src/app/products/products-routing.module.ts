import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  {path: 'products/:productId',   component: ProductDetailComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
