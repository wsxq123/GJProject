import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoBtnComponent } from '../logo-btn/logo-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    LogoBtnComponent,
    CommonModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
  ],
})
export class FooterComponent {
  bgcolor = '#e9d3ee';
  copyRight =
    'Copyright© OPTIMAL SEAL TRAVEL SERVICE CO., LTD. All Rights Reserved';

  footerTextList = [
    {
      title: '服務',
      textList: [
        { text: '關於我們', path: '/about' },
        { text: '旅遊行程', path: '/product/japanTravel' },
        { text: '聯繫我們' },
      ],
    },
    {
      title: '資訊',
      textList: [
        { text: '地址: 10041台北市中正區公園路30號3樓' },
        { text: '代表人: Lillian Lin' },
        { text: '電話: 123 456 7890' },
        { text: 'Email: OptimalSealTravel@gmail.com' },
      ],
    },
  ];
}
