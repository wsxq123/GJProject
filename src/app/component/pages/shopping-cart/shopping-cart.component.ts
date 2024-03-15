import { Component, VERSION } from '@angular/core';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { shoppingCartType } from './shoppingCartType';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [
    IntervalBlockComponent,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    CommonModule,
    MatDividerModule,
  ],
})
export class ShoppingCartComponent {
  path = '/checkOrder';

  tripData: shoppingCartType[] = [
    {
      mainImgurl: 'assets/image/japenTravelPage/TravelMainImg.png ',
      area: 'japan',
      title: 'JPTOURTITLE',
      adultQuantity: 0, // Initialize adult quantity
      childrenQuantity: 0, // Initialize children quantity
      travelInfo: [
        {
          productCode: '24JY324BRM-J',
          startDate: '2024/03/24 (日)',
          endDate: '2024/03/28 (四)',
          travelDays: '5',
          adultTicketPrice: '51900',
          childrenTicketPrice: '49900',
        },
      ],
    },
    {
      mainImgurl: 'assets/image/koreaTravelPage/TravelMainImg.png ',
      area: 'korea',
      title: 'KRTOURTITLE',
      adultQuantity: 0, // Initialize adult quantity
      childrenQuantity: 0, // Initialize children quantity
      travelInfo: [
        {
          productCode: '24JY324BRM-K',
          startDate: '2024/03/24 (日)',
          endDate: '2024/03/28 (四)',
          travelDays: '5',
          adultTicketPrice: '25900',
          childrenTicketPrice: '24900',
        },
      ],
    },
    {
      mainImgurl: 'assets/image/europeTravelPage/TravelMainImg.png ',
      area: 'europe',
      title: 'EUTOURTITLE',
      adultQuantity: 0, // Initialize adult quantity
      childrenQuantity: 0, // Initialize children quantity
      travelInfo: [
        {
          productCode: '24JY324BRM-E',
          startDate: '2024/04/04 (四)',
          endDate: '024/04/15 (一)',
          travelDays: '12',
          adultTicketPrice: '169900',
          childrenTicketPrice: '167900',
        },
      ],
    },
  ];

  //下一頁
  checkboxChecked: boolean = false;
  checkboxChanged(event: Event) {
    this.checkboxChecked = (event.target as HTMLInputElement).checked;
  }

  name = 'Angular ' + VERSION.major;
  value: number = 0;
  value2 = 0;

  handleMinus(trip: shoppingCartType, type: string) {
    if (type === 'adult' && trip.adultQuantity > 0) {
      trip.adultQuantity--;
    } else if (type === 'children' && trip.childrenQuantity > 0) {
      trip.childrenQuantity--;
    }
  }

  handlePlus(trip: shoppingCartType, type: string) {
    if (type === 'adult') {
      trip.adultQuantity++;
    } else if (type === 'children') {
      trip.childrenQuantity++;
    }
  }

  childrenMinus(trip: shoppingCartType, type: string) {
    if (type === 'adult' && trip.adultQuantity > 0) {
      trip.adultQuantity--;
    } else if (type === 'children' && trip.childrenQuantity > 0) {
      trip.childrenQuantity--;
    }
  }

  childrenPlus(trip: shoppingCartType, type: string) {
    if (type === 'adult') {
      trip.adultQuantity++;
    } else if (type === 'children') {
      trip.childrenQuantity++;
    }
  }
  countSum(ticketPrice: string, number: number): number {
    return Number(ticketPrice) * number;
  }

  calculateTotal(): number {
    let total = 0;
    this.tripData.forEach((trip) => {
      trip.travelInfo.forEach((t) => {
        total += this.countSum(t.adultTicketPrice, trip.adultQuantity);
        total += this.countSum(t.childrenTicketPrice, trip.childrenQuantity);
      });
    });
    return total;
  }
}
