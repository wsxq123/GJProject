import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoBtnComponent } from '../logo-btn/logo-btn.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [LogoBtnComponent, CommonModule],
})
export class FooterComponent {
  bgcolor = '#e9d3ee';
  copyRight =
    'Copyright© OPTIMAL SEAL TRAVEL SERVICE CO., LTD. All Rights Reserved';

  footerTextList = [
    {
      title: '服務',
      textList: ['關於我們', '旅遊行程', '聯繫我們'],
    },
    {
      title: '資訊',
      textList: [
        '地址: 10041台北市中正區公園路30號3樓',
        '代表人: Lillian Lin',
        '電話: 123 456 7890',
        'Email: OptimalSealTravel@gmail.com',
      ],
    },
  ];
}
