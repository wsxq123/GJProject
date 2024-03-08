import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { ShoppingCartComponent } from './component/pages/shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './component/pages/home/about-page/about-page.component';
import { KoreaTravelPageComponent } from './component/pages/home/product/korea-travel-page/korea-travel-page.component';
import { EuropeTravelPageComponent } from './component/pages/home/product/europe-travel-page/europe-travel-page.component';
import { JapanTravelPageComponent } from './component/pages/home/product/japan-travel-page/japan-travel-page.component';
import { RegisterComponent } from './component/pages/login/register.component';
import { ForgetPasswordComponent } from './component/pages/login/forgetpassword.component';
import { ResetpasswordComponent } from './component/pages/login/resetpassword/resetpassword.component';
import { UserprofileComponent } from './component/pages/login/userprofile/userprofile.component';
import { MemberlistComponent } from './component/pages/login/adminpage/memberlist.component';
import { TravelListPageComponent } from './component/pages/home/product/travel-list-page/travel-list-page.component';

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
  // eslint-disable-next-line prettier/prettier
  {
    path: 'register',
    title: 'register page',
    component: RegisterComponent,
  },
  {
    path: 'forgetpassword',
    title: 'forgetpassword page',
    component: ForgetPasswordComponent,
  },
  {
    path: 'resetpassword',
    title: 'resetpassword page',
    component: ResetpasswordComponent,
  },
  {
    path: 'userprofile',
    title: 'userprofile page',
    component: UserprofileComponent,
  },
  {
    path: 'shoppingCart',
    title: 'shoppingCart page',
    component: ShoppingCartComponent,
  },
];
