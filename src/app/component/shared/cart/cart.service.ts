import { Injectable } from '@angular/core';
import { Product } from '@api/product-api/productType';
import { Order } from '@api/order-api/orderType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Order[] = [];

  addProductToCart(product: Product) {
    const data: Order = {
      ...product,
      memberId: 'nobody',
      productAmountAdult: 0,
      productAmountChild: 0,
      productTotalPrice: 0,
    };
    this.cart.push(data);
    console.log('product: ');
    console.log(product);
    console.log('data: ');
    console.log(data);
  }

  // productConvertToOrder(product: Product): Order {
  //   return {
  //     ...product,
  //     memberId: '3',
  //     productAmountAdult: 0,
  //     productAmountChild: 0,
  //     productTotalPrice: 0,
  //   };
  // }

  clearCart() {
    this.cart = [];
  }
}
