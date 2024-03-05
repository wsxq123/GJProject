import { Component } from '@angular/core';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { TravelListItemComponent } from '../shared/travel-list-item/travel-list-item.component';
import fakeJson from '@assets/travelList/fake.json';
import { travelListItemType } from '../shared/travel-list-item/travel-list-item-type';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-travel-list-page',
  standalone: true,
  templateUrl: './travel-list-page.component.html',
  styleUrl: './travel-list-page.component.scss',
  imports: [
    IntervalBlockComponent,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    TranslateModule,
    TravelListItemComponent,
    CommonModule,
    MatDividerModule,
  ],
})
export class TravelListPageComponent {
  path = '/about';
  dataArray: travelListItemType[] = fakeJson;
}
