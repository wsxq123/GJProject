import { Injectable } from '@angular/core';
import { Product } from '@api/product-api/productType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  addProductToCart(product: Product) {
    this.cart.push(product);
    console.log('cart: ');
    console.log(this.cart);
  }

  clearCart() {
    this.cart = [];
  }
}
