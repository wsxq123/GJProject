import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './productType';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:8080/travelweb/products';
  localOrders: string[] = [];
  errmsg: any;

  constructor(private http: HttpClient) {}

  //get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in getProducts' + err;
      })
    );
  }

  //get a product by ID
  getProductByID(productID: string): Observable<Product> {
    return this.http.get<Product[]>(this.baseUrl + '/' + productID).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in getProduct' + err;
      })
    );
  }

  //add a product to DB
  addProduct(product: Product): Observable<Product> {
    return this.http.post<string>(this.baseUrl + '/add', product).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in addProduct' + err;
      })
    );
  }

  //update product
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<string>(this.baseUrl + '/update', product).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in updateProduct' + err;
      })
    );
  }

  //delete prodcut by product ID
  deleteProduct(productID: string): Observable<Product> {
    return this.http.delete<any>(this.baseUrl + '/' + productID).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in deleteProduct' + err;
      })
    );
  }
}
