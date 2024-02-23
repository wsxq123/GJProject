import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductTopBlockComponent } from '../shared/product-top-block/product-top-block.component';
import { SpecialNoteComponent } from '../shared/special-note/special-note.component';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { ProductTitleComponent } from '../shared/product-title/product-title.component';
import { TravelSpotBlockComponent } from '../shared/travel-spot-block/travel-spot-block.component';

@Component({
  selector: 'app-korea-travel-page',
  standalone: true,
  templateUrl: './korea-travel-page.component.html',
  styleUrl: './korea-travel-page.component.scss',
  imports: [
    ProductTopBlockComponent,
    SpecialNoteComponent,
    IntervalBlockComponent,
    ProductTitleComponent,
    TravelSpotBlockComponent,
    CommonModule,
  ],
})
export class KoreaTravelPageComponent {
  travelLocation = 'korea';
  titileList = ['HighLights', 'Sights', 'Accommodation', 'Shopping', 'Food'];

  highLightsTitle1 = '【海雲台濱海列車】';
  highLightsContent1 = `海雲台觀光列車，是將已廢棄的釜山「東海南部線」
  從廢棄的尾浦站、青沙埔、松亭串接起來，
  重新活化再造於2020打造完成並開始運行，
  讓要飽覽海雲台海岸線風光有了更多元的選擇。
  透過現代化的設計分別將列車行進方式分為兩種：
  天空膠囊列車，以及濱海觀光列車，
  且列車整體呈現色彩繽紛吸引不少民眾前往朝聖`;

  highLightsTitle2 = '【穿韓服遊古宅】';
  highLightsContent2 = `慶州校村為慶州市所建設的韓屋村，開放遊客參觀崔氏家族過去的生活場域，
  為能進行教育與體驗的景點。
  村內坐落著重要民俗文化財第27號「慶州崔氏古宅」，
  而崔式古宅最著名的莫過於崔姓富豪家族富12代的故事，
  故當地流傳著關於「崔氏致富的秘密」，
  就讓我們換上古代傳統的禮服，一同探索這個祕密吧`;

  highLightsTitle3 = '【鎮海櫻花慶典】';
  highLightsContent3 = `每到春季~大家最趨之若鶩的不外乎就是粉嫩的櫻花，
  而位於韓國昌原的鎮海，一年一度的櫻花祭典,
  更是讓不少韓國本地民眾以及來自海外觀光客點名必訪之處，
  不僅僅是慶和火車站，另外還有浪漫的余佐川羅曼史橋，再到帝皇山，
  放眼望去盡是櫻花樹海，
  就讓我們一同漫步在翩翩落下的粉嫩櫻花瓣中吧！！`;

  sightsTitleList = [
    {
      url: 'assets/image/koreaTravelPage/SightsImg01.png',
      title: '九龍浦近代歷史街區',
    },
    {
      url: 'assets/image/koreaTravelPage/SightsImg02.png',
      title: '甘川洞文化村',
    },
    {
      url: 'assets/image/koreaTravelPage/SightsImg03.png',
      title: '青沙浦踏石觀景台',
    },
    {
      url: 'assets/image/koreaTravelPage/SightsImg04.png',
      title: '大邱 E WORLD',
    },
  ];

  accommodationContent =
    '3晚ARBAN CITY 或 IBIS 或 CONNECT 或 TOWER HILL 或 Allzip Archieve4H 或同級商務觀光飯店';

  shoppingTitle1 = '釜山西面鬧區';
  shoppingContent1 = `釜山逛街必訪之處~西面，聚集了百貨公司、以及各大品牌、
    特色咖啡廳、當紅餐廳等等，絕對是釜山逛街首選`;

  shoppingTitle2 = '東城路商圈';
  shoppingContent2 = `色彩繽紛的東城路是大邱市最大商圈，夾雜在大邱站、
    中央路站、半月堂站一帶，
    集結韓國最新流行服飾美妝與美食餐廳，
    獨具一番風味的店面設計吸引逛街人潮與眾多遊客前來朝聖`;

  shoppingTitle3 = '南浦洞商圈';
  shoppingContent3 = `南浦洞與附近的國際市場、富平市場、
    札嘎其市場等釜山購物商圈串聯，
    成為韓國數一數二的大型綜合市場。
    也是到訪釜山絕對不容錯過的逛街必到之處`;

  shoppingContent4 = `精緻時尚彩妝城    購物站 停留40分鐘~1小時`;

  foodContent1 = `◆ 嚴選韓式風味

  1.醒酒湯飯 (餐標:韓幣10,000/人）
  2.【浦項青年】馬鈴薯燉豬骨湯 (餐標:韓幣11,000/人）
  3.【柳家】鐵板雞+金玉炒飯 (餐標:韓幣13,000/人）
  4.【明倫進士】韓式烤肉吃到飽(餐標:韓幣19,000/人）
  5.韓國美味百選~釜山道地豬肉湯飯 (餐標:韓幣10,000/人）
  6.【澤家】海鮮痛風鍋~八爪魚+各式貝類+韓國黑輪+刀削麵(餐標:韓幣20,000/人）
  7.慶州特色~煙燻南瓜鴨套餐(餐標:韓幣18,000/人）
  8.韓國美味百選~大邱燉排骨 (餐標:韓幣13,000/人）
  
  ◆ 方便遊玩，自由美食免自費
  
  1.發放餐費(韓幣6,000/人）於【鎮海櫻花祭】自理
  `;

  highLightsImgUrl1 = 'assets/image/koreaTravelPage/HighLightImg01.png';
  highLightsImgUrl2 = 'assets/image/koreaTravelPage/HighLightImg02.png';
  highLightsImgUrl3 = 'assets/image/koreaTravelPage/HighLightImg03.png';

  sightsImgUrl1 = 'assets/image/koreaTravelPage/SightsImg01.png';
  sightsImgUrl2 = 'assets/image/koreaTravelPage/SightsImg02.png';
  sightsImgUrl3 = 'assets/image/koreaTravelPage/SightsImg03.png';
  sightsImgUrl4 = 'assets/image/koreaTravelPage/SightsImg04.png';

  shoppingImgUrl1 = 'assets/image/koreaTravelPage/ShoppingImg01.png';
  shoppingImgUrl2 = 'assets/image/koreaTravelPage/ShoppingImg02.png';
  shoppingImgUrl3 = 'assets/image/koreaTravelPage/ShoppingImg03.png';

  foodImgUrl1 = 'assets/image/koreaTravelPage/FoodImg01.png';
  foodImgUrl2 = 'assets/image/koreaTravelPage/FoodImg02.png';
  foodImgUrl3 = 'assets/image/koreaTravelPage/FoodImg03.png';
  foodImgUrl4 = 'assets/image/koreaTravelPage/FoodImg04.png';
}
