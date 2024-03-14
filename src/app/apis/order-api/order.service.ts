import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './orderType';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'http://localhost:8080/travelweb/orders';
  localOrders: string[] = [];
  errmsg: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  //get orders
  getOrders() {
    this.http.get<any>(this.baseUrl).subscribe({
      next: (data) => {
        this.localOrders = [];
        this.localOrders = data;
        console.log(this.localOrders);
      },
      error: (error) => {
        this.errmsg = error;
        console.log('error massage: ' + error);
      },
    });
  }

  //get orders by member ID
  getOrdersByID(memberID: string) {
    this.http.get<any>(this.baseUrl + memberID).subscribe({
      next: (data) => {
        this.localOrders = [];
        this.localOrders = data;
        console.log(this.localOrders);
      },
      error: (error) => {
        this.errmsg = error;
        console.log('error massage: ' + error);
      },
    });
  }

  //add orders to DB
  postOrders(orderList: Order[]) {
    this.http.post<Order>(this.baseUrl + '/add', orderList).subscribe({
      next: (data) => {
        console.log('success! ' + data);
      },
      error: (error) => {
        this.errmsg = error.message;
        console.error('There was an error!', error);
      },
    });
  }
}
