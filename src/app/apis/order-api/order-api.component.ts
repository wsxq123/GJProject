import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-order-api',
  standalone: true,
  imports: [],
  templateUrl: './order-api.component.html',
})
export class OrderApiComponent implements OnInit {
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://localhost:8080/travelweb/orders')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
