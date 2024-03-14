import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HomeComponent } from '../home/home.component';
import { authGuard } from './helpers/auth.guard';
import { ForgetPasswordComponent } from './forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profiles/profile.component';

//const usersRoutes = () =>
//import('./users/user.routes').then((x) => x.USERS_ROUTES);

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  //{ path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  {
    path: 'travelweb/members/:memberId',
    component: ProfileComponent,
    //canActivate: [authGuard],
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];
