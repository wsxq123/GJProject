import { Injectable } from '@angular/core';
import { Product, ShoppingCartType } from '@api/product-api/productType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ShoppingCartType[] = [];

  addProductToCart(product: Product) {
    const data: ShoppingCartType = {
      ...product,
      adultQuantity: 0,
      childrenQuantity: 0,
    };
    this.cart.push(data);
    console.log('product: ');
    console.log(product);
    console.log('data: ');
    console.log(data);
  }

  clearCart() {
    this.cart = [];
  }
}
