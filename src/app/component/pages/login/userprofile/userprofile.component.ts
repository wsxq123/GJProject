import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss',
})
export class UserprofileComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
