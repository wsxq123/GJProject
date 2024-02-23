import { Component } from '@angular/core';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductTopBlockComponent } from '../shared/product-top-block/product-top-block.component';
import { ProductTitleComponent } from '../shared/product-title/product-title.component';
import { SpecialNoteComponent } from '../shared/special-note/special-note.component';
import { TravelSpotBlockComponent } from '../shared/travel-spot-block/travel-spot-block.component';

@Component({
  selector: 'app-japan-travel-page',
  standalone: true,
  templateUrl: './japan-travel-page.component.html',
  styleUrl: './japan-travel-page.component.scss',
  imports: [
    IntervalBlockComponent,
    MatButtonModule,
    ProductTopBlockComponent,
    ProductTitleComponent,
    SpecialNoteComponent,
    TravelSpotBlockComponent,
  ],
})
export class JapanTravelPageComponent {
  travelLocation = 'japen';
  titileList = ['HighLights', 'Sights', 'Experience'];
  highLightsTitle1 = '賞櫻仙境~紫雲出山/瀨戶內海令人屏息的夢幻頂級絕景';
  highLightsTitle3 = '◆金刀比羅宮';
  highLightsContent1 =
    '紫雲出山 Shiudeyama\n標高352公尺的紫雲出山位於香川縣三豐市的莊內半島。\n由景觀豐富的四國自然步道徒步登頂,\n倘佯在瀨戶內海浮島層層相疊,繚繞的動人美景。';
  highLightsContent2 = '第三展望台\n盛開櫻花和瀨戶內海浮島交織一片,盡收眼底!';
  highLightsContent3 =
    '位於香川縣西部海拔521米的象頭山山腰上。\n這裏因供奉著被稱爲“金毘羅”的海上守護神而聞名,\n有治療疾病、消災避禍、帶來好運的神明,因此自古以來一直香火興旺。\n參拜道路極長,到象頭山山腰的正宮爲785級石階,\n到奧社是1368級,站在正宮前可以一覽讚岐平原。';

  sightsTitle1 = '道後溫泉街◆神隱少女湯屋';
  sightsContent1 =
    '位於愛媛縣西部,有3000年以上的歷史,與兵庫縣的有馬溫泉、\n和歌山縣的白浜溫泉,並列為「日本三大古湯」。讓你悠遊漫步於道後溫泉商店街。';

  experienceTitle1 = '◆香川名物讚歧烏龍麵DIY體驗';
  experienceContent1 =
    '根據香川縣當地的傳說弘法大師由唐朝帶回烏龍麵的製法，拯救了讚岐當地的貧民。\n因為瀨戶內海雨水稀少,很難種米而傳授給讚岐人,一般認為,這就是現在的讚岐烏龍麵的原型。';

  highLightsImgUrl1 = 'assets/image/japenTravelPage/HighLightImg01.png';
  highLightsImgUrl2 = 'assets/image/japenTravelPage/HighLightImg02.png';
  highLightsImgUrl3 = 'assets/image/japenTravelPage/HighLightImg03.png';
  highLightsImgUrl4 = 'assets/image/japenTravelPage/HighLightImg04.png';

  sightsImagUrl1 = 'assets/image/japenTravelPage/SightsImg01.png';
  sightsImagUrl2 = 'assets/image/japenTravelPage/SightsImg02.png';
  sightsImagUrl3 = 'assets/image/japenTravelPage/SightsImg03.png';
  sightsImagUrl4 = 'assets/image/japenTravelPage/SightsImg04.png';
  sightsImagUrl5 = 'assets/image/japenTravelPage/SightsImg05.png';

  experienceImgUrl1 = 'assets/image/japenTravelPage/ExperienceImg01.png';
  experienceImgUrl2 = 'assets/image/japenTravelPage/ExperienceImg02.png';
  experienceImgUrl3 = 'assets/image/japenTravelPage/ExperienceImg03.png';
  experienceImgUrl4 = 'assets/image/japenTravelPage/ExperienceImg04.png';
  experienceImgUrl5 = 'assets/image/japenTravelPage/ExperienceImg05.png';

  specialNoteImgUrl = 'assets/image/specialNoteImg.png';
}
