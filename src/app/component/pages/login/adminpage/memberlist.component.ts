import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models';

import { ActivatedRoute, Data, Router } from '@angular/router';
import { MemberService } from '../services/member.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MemberlistComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  members: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private router: Router
  ) {}
  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void {
    this.memberService.getAllMembers();
    throw new Error('Method not implemented.');
  }

  getbyId(id: number): void {
    this.memberService.getById(id).subscribe(
      (data: Data) => {
        console.log('Member details:', data);
      },
      (error: Error) => {
        console.error('Error fetching member:', error);
      }
    );
  }
}
