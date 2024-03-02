import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IntervalBlockComponent } from '../../../shared/interval-block/interval-block.component';
import { serviceBaseList } from './serviceBaseList';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [IntervalBlockComponent, MatTableModule, TranslateModule],
})
export class AboutPageComponent {
  bannerBgImgUrl = 'assets/image/aboutPage/bannerBgImg.png';
  bannerImgUrl = 'assets/image/aboutPage/bannerImg.png';
  starIconUrl = 'assets/image/aboutPage/starIcon.png';
  serviceBaseList = serviceBaseList;
  displayedColumns: string[] = ['name', 'location', 'phone', 'businessHours'];
  bannerText = 'ABOUTPAGEBANNERTEXT';
  bannerTitleList = ['ABOUTUS', 'PROMOVIDEO', 'TRAVELMAP', 'BRANCHOFFICE'];
}
