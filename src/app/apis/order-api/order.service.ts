import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './orderType';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'http://localhost:8080/travelweb/orders';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  //get orders (not test yet)
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in getOrders' + err;
      })
    );
  }

  //get orders by member ID (test OK => DB 只回傳一筆，待更新)
  getOrdersByMemberID(memberID: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + '/' + memberID).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in catchError' + err;
      })
    );
  }

  //add orders to DB (not test yet)
  addOrders(orderList: Order[]): Observable<Order[]> {
    return this.http.post<string>(this.baseUrl + '/add', orderList).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in addOrders' + err;
      })
    );
  }

  //add a order to DB (test OK)
  addOrder(order: Order): Observable<Order> {
    return this.http.post<string>(this.baseUrl + '/add', order).pipe(
      tap(console.log),
      catchError((err) => {
        console.log(err);
        throw 'error in addOrders' + err;
      })
    );
  }
}
