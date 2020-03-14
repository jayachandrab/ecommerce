import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart=[];
 cartTotal=0;
  constructor(private productSerive:ProductsService) { }

  ngOnInit() {
    this.productSerive.getCart().subscribe(data=>{
      this.cart = [...data];
      this.cartTotal= this.cart.reduce((acc,cur)=>acc+Number(cur.price),0);
    });
  }

  removeItemFromCart(item){
    this.productSerive.removeFromCart(item.id);
  }

}
