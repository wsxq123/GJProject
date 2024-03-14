import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OrdersComponent {
  orders = [
    {
      pictureUrl: 'assets/image/japanTravelPage/HighLightImg04.png',
      orderId: '1',
      memberId: '2',
      productCode: 'JP11',
      productName: '日本三天兩夜',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/28 (四)',
      productAmountAdult: '2',
      productAmountChild: '2',
      productTotalPrice: '3600',
    },
    {
      pictureUrl: 'assets/image/koreaTravelPage/HighLightImg02.png',
      orderId: '2',
      memberId: '2',
      productCode: 'KR12',
      productName: '韓國三天兩夜',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/28 (四)',
      productAmountAdult: '5',
      productAmountChild: '4',
      productTotalPrice: '9890',
    },
    {
      pictureUrl: 'assets/image/europeTravelPage/TravelMainImg.png',
      orderId: '3',
      memberId: '2',
      productCode: 'EU13',
      productName: '歐洲三天兩夜',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/28 (四)',
      productAmountAdult: '2',
      productAmountChild: '1',
      productTotalPrice: '3000',
    },
  ];
}
