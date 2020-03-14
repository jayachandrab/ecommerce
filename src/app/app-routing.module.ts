import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path: 'products', component:ProductlistComponent },
  {path: 'cart', component:CartComponent },
  {path: 'orders', component:OrderComponent },
  {path: 'checkout', component: CheckoutComponent},
  {path: '', redirectTo:'products',pathMatch:'full' },
  {path: '**', component: PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
