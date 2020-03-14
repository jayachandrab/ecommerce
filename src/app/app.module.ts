import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppnavComponent } from './appnav/appnav.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './services/truncat.pipe';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AppnavComponent,
    CheckoutComponent,
    CartComponent,
    PageNotfoundComponent,
    TruncatePipe,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
