import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IntervalBlockComponent } from '../../../shared/interval-block/interval-block.component';
import { serviceBaseList } from './serviceBaseList';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [IntervalBlockComponent, MatTableModule],
})
export class AboutPageComponent {
  bannerBgImgUrl = 'assets/image/aboutPage/bannerBgImg.png';
  bannerImgUrl = 'assets/image/aboutPage/bannerImg.png';
  // mapImgUrl = 'assets/image/aboutPage/mapImg.png';
  // locationOnIconUrl = 'assets/image/aboutPage/locationOnIcon.png';
  starIconUrl = 'assets/image/aboutPage/starIcon.png';
  serviceBaseList = serviceBaseList;
  displayedColumns: string[] = ['name', 'location', 'phone', 'businessHours'];
  bannerText =
    '除致力於旅遊產業垂直整合外, \n\r威豹旅遊導入資訊化與知識管理系統。積極朝生活產業水平擴展, 秉持「Optimal Seal , travel more dream」,朝向「客戶滿意、實現美好生活」的目標邁進。';
}
