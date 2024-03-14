// export interface Product {
//   area: string;
//   title: string;
//   mainImgurl: string;
//   travelInfo: travelInfo[];
// }

export interface Product {
  productId?: string;
  productCode: string;
  productName: string;
  productArea: string;
  startDate: string;
  endDate: string;
  travelDays: string;
  adultTicketPrice: string;
  childrenTicketPrice: string;
}
