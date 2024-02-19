import { Component } from '@angular/core';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-japan-travel-page',
  standalone: true,
  templateUrl: './japan-travel-page.component.html',
  styleUrl: './japan-travel-page.component.scss',
  imports: [IntervalBlockComponent, MatButtonModule],
})
export class JapanTravelPageComponent {
  title =
    '春櫻四國松山｜紫雲出山~賞櫻仙境,櫻名勝栗林公園,\n櫻百選松山城,父母之濱,遊船,採草莓,道後溫泉,魔女小豆島五日';
  mainText = `產品代碼 : 24JY324BRM-T \n去程2024/03/24 (日) \n回程2024/03/28 (四) 共5天\n
  成人:51,900元 \n兒童:49,900元`;

  travelMainImgUrl = 'assets/image/japenTravelPage/TravelMainImg.png';
  travelBannerImgUrl = 'assets/image/japenTravelPage/TravelBannerImg.png';
}
