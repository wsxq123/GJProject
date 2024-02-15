import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { recommandCardItem } from './recommandCardType';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  slideShowUrlList: string[] = [
    'assets/image/homePage/SideShow01.png',
    'assets/image/homePage/SideShow02.png',
    'assets/image/homePage/SideShow03.png',
  ];
  currentSlideShowNum: number = 0;
  recommandCardList: recommandCardItem[] = [
    {
      travelCommand: '日本旅行推薦',
      content: '春櫻四國松山',
      locationList: [
        {
          url: 'assets/image/homePage/JapenImg01.png',
          content: '◆紫雲出山',
        },
        {
          url: 'assets/image/homePage/JapenImg02.png',
          content: '◆金刀比羅宮',
        },
        {
          url: 'assets/image/homePage/JapenImg03.png',
          content: '◆道後溫泉街',
        },
        {
          url: 'assets/image/homePage/JapenImg04.png',
          content: '◆讚歧烏龍麵DIY體驗',
        },
      ],
    },
  ];

  changeSlideShow() {
    if (this.currentSlideShowNum == this.slideShowUrlList.length - 1) {
      this.currentSlideShowNum = 0;
    } else {
      this.currentSlideShowNum++;
    }
  }
}
