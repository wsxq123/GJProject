export interface Order {
  orderId?: string;
  memberId: string;
  productCode: string;
  productName: string;
  startDate: string;
  endDate: string;
  productAmountAdult: string;
  productAmountChild: string;
  productTotalPrice: string;
}
