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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class TravelListPageComponent {
  path = '/about';
  originralDataArray: travelListItemType[] = fakeJson;
  dataArray: travelListItemType[] = this.originralDataArray;
  newDataArray: travelListItemType[] = [];

  locationCheckBoxList: locationCheckBoxListType = {
    title: 'TRAVEL',
    subCheckBox: [
      { location: 'JAPAN', isChecked: false },
      { location: 'KOREA', isChecked: false },
      { location: 'EUROPE', isChecked: false },
    ],
  };

  checkBoxCurrentState() {
    this.locationCheckBoxList.subCheckBox.forEach((i) =>
      console.log(i.location + ' ' + i.isChecked)
    );
  }

  //應改寫為重call api
  dataArrayFilter() {
    this.newDataArray = [];
    console.log('tesd');

    this.locationCheckBoxList.subCheckBox.forEach((item) => {
      if (item.isChecked) {
        this.originralDataArray.filter((i) => {
          if (i.area == item.location) {
            this.newDataArray.push(i);
          }
        });
      }
    });
    this.dataArray = this.newDataArray;
  }
}

type locationCheckBoxListType = {
  title: string;
  subCheckBox: location[];
};

type location = {
  location: string;
  isChecked: boolean;
};
