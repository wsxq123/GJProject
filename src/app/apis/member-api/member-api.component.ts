import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './member-api.component.html',
})
export class MemberApiComponent implements OnInit {
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://localhost:8080/travelweb/members')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
