import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-product-api',
  standalone: true,
  imports: [],
  templateUrl: './product-api.component.html',
})
export class ProductApiComponent implements OnInit {
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://localhost:8080/travelweb/products')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
