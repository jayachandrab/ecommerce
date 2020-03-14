import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [];
  productsSub;

  _cart = [];
  cartSub ;

  constructor(private http:HttpClient) {
    this.productsSub = new BehaviorSubject < any[] >(this.products);
    this.cartSub = new BehaviorSubject < any[]> (this._cart);
   }
  fetchProducts(){
   this.http.get<any []>('/api/getproducts/').subscribe(data=>{
     this.products=[...data];
     this.productsSub.next([...this.products]);
   })


  }
  getProducts(){
    return this.productsSub.asObservable();
  }
  getCart() {
    return this.cartSub.asObservable();
  }
  addToCart(id) {
    const product = this.findItemInProducts(id);
    if (product.length !== 0) {
      if (this.findItemInCart(id).length) {
        this.removeFromCart(id);
      } else {
        this._cart.push(product[0]);
      }
      this.cartSub.next([...this._cart]);
    }
  }
  removeFromCart(id) {
      if (this.findItemInCart(id).length) {
        const item = this.findItemInCart(id)[0];
        const index = this._cart.indexOf(item);
        this._cart.splice(index, 1);
      }
      this.cartSub.next([...this._cart]);
  }
  findItemInCart(id) {
    const item = this._cart.filter(product => product._id === id);
    return item;
  }
  findItemInProducts(id) {
    const item = this.products.filter(product => product._id === id);
    return item;
  }
  checkout(data){
   return this.http.post('/api/checkout/',data);
  }

  clearCart() {

    this.cartSub.next([]);
}
}
