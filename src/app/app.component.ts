import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { MemberApiComponent } from './apis/member-api/member-api.component';
import { ProductApiComponent } from './apis/product-api/product-api.component';
import { OrderApiComponent } from './apis/order-api/order-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MemberApiComponent,
    ProductApiComponent,
    OrderApiComponent,
  ],
})
export class AppComponent {
  title = 'GJProject';
}
