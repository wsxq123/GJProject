export type productTopBlockType = {
  title: string;
  mainImgurl: string;
  travelInfo: {
    productCode: string;
    startDate: string;
    endDate: string;
    travelDays: number;
    adultTicketPrice: number;
    childrenTicketPrice: number;
  };
  bannerImgurl: string;
};

export type travelLocationType = {
  japen: productTopBlockType;
  korea: productTopBlockType;
  europe: productTopBlockType;
};

export const productTopBlockContent: travelLocationType = {
  japen: {
    title:
      '春櫻四國松山｜紫雲出山~賞櫻仙境,櫻名勝栗林公園,\n櫻百選松山城,父母之濱,遊船,採草莓,道後溫泉,魔女小豆島五日',
    mainImgurl: 'assets/image/japenTravelPage/TravelMainImg.png',
    travelInfo: {
      productCode: '24JY324BRM-T',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/28 (四) ',
      travelDays: 5,
      adultTicketPrice: 51900,
      childrenTicketPrice: 49900,
    },
    bannerImgurl: 'assets/image/japenTravelPage/TravelBannerImg.png',
  },
  korea: {
    title:
      '花現釜山鎮海旅遊｜鎮海櫻花,羅曼史橋慶和站櫻花,\n海雲台列車,EWORLD櫻花季,釜山櫻花隧道(一站購物彩妝)四日',
    mainImgurl: 'assets/image/koreaTravelPage/TravelMainImg.png',
    travelInfo: {
      productCode: '24JK3277CG-T',
      startDate: '2024/03/27 (三)',
      endDate: '2024/03/30 (六) ',
      travelDays: 4,
      adultTicketPrice: 25900,
      childrenTicketPrice: 24900,
    },
    bannerImgurl: 'assets/image/koreaTravelPage/TravelBannerImg.png',
  },
  europe: {
    title:
      '旗艦義大利送杜拜│威尼斯本島連泊,雙博物館巡禮,\n南北絕美雙島,阿瑪菲海岸,帆船饗宴,杜拜五星免小費12日',
    mainImgurl: 'assets/image/europeTravelPage/TravelMainImg.png',
    travelInfo: {
      productCode: '24EI404EK-T',
      startDate: '2024/04/04 (四)',
      endDate: '2024/04/15 (一) ',
      travelDays: 12,
      adultTicketPrice: 169900,
      childrenTicketPrice: 167900,
    },
    bannerImgurl: 'assets/image/europeTravelPage/TravelBannerImg.png',
  },
};
