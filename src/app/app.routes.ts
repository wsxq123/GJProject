import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { ShoppingCartComponent } from './component/pages/shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './component/pages/home/about-page/about-page.component';
import { ProductPageComponent } from './component/pages/home/product-page/product-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'home page',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'about page',
    component: AboutPageComponent,
  },
  {
    path: 'product',
    title: 'product page',
    component: ProductPageComponent,
  },
  {
    path: 'login',
    title: 'login page',
    component: LoginComponent,
  },
  {
    path: 'shoppingCart',
    title: 'shoppingCart page',
    component: ShoppingCartComponent,
  },
];
