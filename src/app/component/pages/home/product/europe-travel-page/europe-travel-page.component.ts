import { Component } from '@angular/core';
import { ProductTopBlockComponent } from '../shared/product-top-block/product-top-block.component';
import { SpecialNoteComponent } from '../shared/special-note/special-note.component';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { ProductTitleComponent } from '../shared/product-title/product-title.component';
import { TravelSpotBlockComponent } from '../shared/travel-spot-block/travel-spot-block.component';

@Component({
  selector: 'app-europe-travel-page',
  standalone: true,
  templateUrl: './europe-travel-page.component.html',
  styleUrl: './europe-travel-page.component.scss',
  imports: [
    ProductTopBlockComponent,
    SpecialNoteComponent,
    IntervalBlockComponent,
    ProductTitleComponent,
    TravelSpotBlockComponent,
  ],
})
export class EuropeTravelPageComponent {
  travelLocation = 'europe';
  titileList = ['HighLights', 'Sights', 'Accommodation', 'Food'];

  highLightsContent = `★蜜月新人憑一年內登記證明或喜帖正本，報名付訂本行程，加贈「L'ERBOLARIO 蕾利歐禮盒組」一份★
  (請於出發前10天，附上一年內結婚相關證明予銷售專員，逾時無法贈予。)
  (如遇贈品短缺，則改贈送其他蜜月贈禮做為替代，本公司保有調整的權利。)
  ◆ 阿聯酋雙點進出 ◆ 連泊威尼斯本島
  ◆ 雙高鐵串聯全義 ◆ 饗奢華快閃杜拜`;

  sightsTitle1 = '探索梵諦岡博物館之旅';
  sightsContent1 = `我們與米開朗基羅最近的距離
  來義大利旅遊絕不能錯過最讓人驚豔與震撼的梵蒂岡博物館，有著世界最重要的藝術收藏地之稱，位於館內的「西斯汀禮拜堂」
  天花板壁畫是米開朗基羅花了四年的時間所創作的藝術鉅作，共分成九大區呈現聖經中關於「創世紀」的故事，可說是世界上最大也最輝煌的壁畫博物館之一。
  ▲如遇「梵蒂岡博物館」週日或宗教節日休館或其他不定期宗教活動，將優先調整行程順序，若是預約皆額滿，
  則改安排「聖天使古堡」入內參觀，另加贈「聖彼得大教堂登頂體驗」，敬請見諒。`;

  sightsTitle2 = '絕美雙島之旅';

  sightsContent3 = `沿途陡峭的山崖加上常年至山上溪流入海時帶來的泥沙堆積形成美麗而曲折的海岸線，充滿了浪漫的奇想與恬靜的舒展及詩意棲居的生活，
  是歐美旅人最愛的渡假勝地之一，此地更被國家地理權威評選為”一生必去的五十個秘境之地，
  更讓《國家地理雜誌》將它與希臘愛琴海諸島並稱「人間天堂」。`;

  accommodationContent = `─ 貼心的住宿安排 ─
  第一天抵達威尼斯，不計成本安排貴賓連泊兩晚威尼斯本島飯店(價值等同五星飯店)，更可以愜意的享受專屬於水都的浪漫晨昏；
  孕育無數名人的佛羅倫斯是座充滿藝術底蘊的文化城市，收藏了大量文藝復興時期的瑰寶，貼心安排下榻市區飯店，有充足的時間在景點旁逗留；
  而羅馬是一個到處都充滿寶藏的城市，即便走上三天三夜也逛不完，我們安排貴賓連泊兩晚羅馬精華市區飯店，
  讓您省下每天進出城的時間，更從容、自在的飽覽這座千年大城。讓義大利之旅在此畫下完美句點。
  【威尼斯】升等★兩晚本島四星飯店 - NH Santa Lucia / Hotel Principe / BW Premier Collection 或同級
  【佛羅倫斯】安排★古城區四星飯店 - Hotel Baglioni / Mercure Centro / Hotel Albani / C-Hotel 或同級
  【羅馬】升等★兩晚市區四星飯店 - Starhotels Metropole / Bettoja Hotel Mediterraneo 或同級
  【杜拜】安排★ 一晚連鎖五星飯店 - Asiana Grand Hotel / Hilton Habtoor / Avani Hotel Dubai 或同級`;

  foodContent1 = `法國美食舉世聞名，卻是深受義大利影響，由梅迪奇家族帶入精食佳餚的飲食文化。
  源起法國的《米其林指南》中，一星表示為「值得停車一嚐的好餐廳」；
  而義大利本地推出的《紅龍蝦》評鑑亦足以與之分庭抗禮。
  義大利菜崇尚食材的原汁原味，以簡單呈盤顯現當地的豐富鮮美──
  一口經典義大利麵、一口五分熟現切牛排，不需複雜的醬汁調味，卻有熱切溫馨的氣氛佐餐，
  美酒、良友，歡聲笑語，美食不只滿足口腹，更添生命的豐富！
  `;

  foodTitle2 = '羅馬米其林一星';
  foodContent2 = `這裡有著首都羅馬最美屋頂之稱，不止料理
  講究，連用餐環境都綠意盎然。連續四年蟬聯米其林一星，每一道菜都堪稱藝術品，展現主廚對於料理的用心。`;

  foodContent3 = `一餐米一星│兩餐米推│八大特色料理
  精心安排多樣化義大利特色風味料理，
  造訪兩次米其林推薦餐廳、
  大啖佛羅倫斯老饕推薦的丁骨牛排、
  跟著當地人來一盤鮮味十足的墨魚麵配炸海鮮、
  品嚐最義最道地的義式香烤Pizza~
  更不能錯過被美食權威法國米其林指南肯定的
  米其林一星精緻料理！
  最後再跟著老義喝一杯全羅馬最好喝的咖啡，
  豐富的美食饗宴，讓這趟義大利之旅增添風采。`;

  dubaiContent1 = `搭乘阿聯酋，送你玩杜拜！
  ※自2022/11/7起，所有前往杜拜的旅客已不再需要出示新冠肺炎疫苗接種證明或進行PCR檢測。`;

  dubaiTitle2 = '七星帆船自助餐';
  dubaiContent2 = `體驗七星級風味料理，帆船飯店是您不可錯過的頂級選擇，
  獨特的外觀像一艘超凡脫俗的白色單桅帆船，
  迎著風昂立在阿拉伯灣中一座專為顧客打造的人工島上，
  內部裝潢金碧輝煌，並巧妙融合現代科技，
  呈現出無與倫比的華麗風格，令人嘆為觀止，
  讓您感覺享受極盡奢華的夢幻～`;

  dubaiTitle3 = '哈里發塔 Burj Khalifa';
  dubaiContent3 = `世界第一高樓登頂
  特別安排搭乘高速電梯登上世界第一高樓【哈里發塔】
  (登塔時間視當團預訂時間為主)(市場價值80美金)`;

  highLightsImgUrl1 = 'assets/image/europeTravelPage/HighLightImg01.png';

  sightsTitleImgUrl1 = 'assets/image/europeTravelPage/SightsTitleImg01.png';
  sightsTitleImgUrl2 = 'assets/image/europeTravelPage/SightsTitleImg02.png';
  sightsImgUrl1 = 'assets/image/europeTravelPage/SightsImg01.png';
  sightsImgUrl2 = 'assets/image/europeTravelPage/SightsImg02.png';
  sightsImgUrl3 = 'assets/image/europeTravelPage/SightsImg03.png';
  sightsImgUrl4 = 'assets/image/europeTravelPage/SightsImg04.png';
  sightsImgUrl5 = 'assets/image/europeTravelPage/SightsImg05.png';
  sightsImgUrl6 = 'assets/image/europeTravelPage/SightsImg06.png';

  foodImgUrl0 = 'assets/image/europeTravelPage/FoodImg00.png';
  foodImgUrl1 = 'assets/image/europeTravelPage/FoodImg01.png';
  foodImgUrl2 = 'assets/image/europeTravelPage/FoodImg02.png';
  foodImgUrl3 = 'assets/image/europeTravelPage/FoodImg03.png';
  foodImgUrl4 = 'assets/image/europeTravelPage/FoodImg04.png';

  travelBannerImgUrl02 = 'assets/image/europeTravelPage/TravelBannerImg02.png';
  dubaiImgUrl1 = 'assets/image/europeTravelPage/DubaiImg01.png';
  dubaiImgUrl2 = 'assets/image/europeTravelPage/DubaiImg02.png';
  dubaiImgUrl3 = 'assets/image/europeTravelPage/DubaiImg03.png';
  dubaiImgUrl4 = 'assets/image/europeTravelPage/DubaiImg04.png';
}
