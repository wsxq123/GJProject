import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { travelListItemType } from './travel-list-item-type';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-travel-list-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    TranslateModule,
    TravelListItemComponent,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss',
})
export class TravelListItemComponent {
  @Input()
  travelListItem!: travelListItemType;
}
