import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  products=[];
  ngOnInit() {
    this.productService.fetchProducts();
    this.productService.getProducts().subscribe(data=>{
        this.products=[...data];
    });
  }

  addItemToCart(item){
    console.log("add to cart "+ item);
    this.productService.addToCart(item._id);
    //this.productsService.addToCart(item.id);
  }

  itemInCart(item){
    return this.productService.findItemInCart(item._id);
  }
}
