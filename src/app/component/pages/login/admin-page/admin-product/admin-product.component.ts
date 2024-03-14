import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ProductService } from '@api/product-api/product.service';
import { Product } from '@api/product-api/productType';

@Component({
  selector: 'app-admin-product',
  standalone: true,
  imports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './admin-product.component.html',
})
export class AdminProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onSearchAll();
    this.onSearchByID();
  }

  inputIDValue: string = '';

  displayedColumns: string[] = [
    'productId',
    'productCode',
    'productName',
    'productArea',
    'startDate',
    'endDate',
    'travelDays',
    'adultTicketPrice',
    'childrenTicketPrice',
    'delete',
  ];

  dataSource: Product[] = [];

  onSearchByID() {
    this.productService
      .getProductByID(this.inputIDValue)
      .subscribe((product: Product) => {
        this.dataSource = [];
        this.dataSource.push(product);
      });
  }

  onSearchAll() {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.dataSource = [];
      this.dataSource = product;
    });
  }

  fakeProductData = {
    // productId: '99',
    productCode: '24JY324BRM-T',
    productName: '1234',
    productArea: 'TinaZone',
    startDate: '2024/03/24 (日)',
    endDate: '2024/03/24 (日)',
    travelDays: '1',
    adultTicketPrice: '9999',
    childrenTicketPrice: '8888',
  };

  onAddProduct(product: Product) {
    this.productService
      .addProduct(product)
      .subscribe((result) => console.log(result));
  }

  onDeleteProduct(memberID: string) {
    this.productService
      .deleteProduct(memberID)
      .subscribe((result) => console.log(result));
    console.log('memberID: ' + memberID);
    // this.onSearchAll();
  }

  onInput(box: string) {
    console.log(box);
    this.inputIDValue = box;
  }
}
