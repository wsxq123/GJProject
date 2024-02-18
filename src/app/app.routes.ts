import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { ShoppingCartComponent } from './component/pages/shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './component/pages/home/about-page/about-page.component';
import { KoreaTravelPageComponent } from './component/pages/home/product-page/korea-travel-page/korea-travel-page.component';
import { EuropeTravelPageComponent } from './component/pages/home/product-page/europe-travel-page/europe-travel-page.component';
import { JapanTravelPageComponent } from './component/pages/home/product-page/japan-travel-page/japan-travel-page.component';

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
    path: 'product/japanTravel',
    title: 'japan travel page',
    component: JapanTravelPageComponent,
  },
  {
    path: 'product/koreaTravel',
    title: 'korea travel page',
    component: KoreaTravelPageComponent,
  },
  {
    path: 'product/europeTravel',
    title: 'europe travel page',
    component: EuropeTravelPageComponent,
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
