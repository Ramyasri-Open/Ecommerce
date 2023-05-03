import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HeadComponent } from './head/head.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MyordersComponent } from './myorders/myorders.component';

const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: '', component: CategoriesComponent },
  { path: 'clothes', component: ClothesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/productDetails/:id', component: ProductDetailsComponent },
  { path: 'myOrders', component: MyordersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
