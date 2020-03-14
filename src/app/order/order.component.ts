import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders=[];
  constructor(private httpCliemnt:HttpClient) { }

  ngOnInit() {
    this.httpCliemnt.get<any>('/api/orders').subscribe(data => this.orders = [...data]);
  }
  totalEarnings(orders) {
    return orders.reduce((acc, cur) => acc + this.orderTotal(cur.items), 0);
  }
  totalItems(orders) {
    return orders.reduce((acc, cur) => acc + cur.items.length, 0);
  }
  orderTotal(items) {
    let total: number;
    total=0;
    let i: number;
    for(i=0;i<items.length;i++){

      total=total + parseInt(items[0].price);
    }
    console.log("total oder cost"+ total);
    //console.log(items.reduce((acc, cur) => acc + cur.price, 0));
    //return items.reduce((acc, cur) => acc + cur.price, 0);
    return total;
  }

}
