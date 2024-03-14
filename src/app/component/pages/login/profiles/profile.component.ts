import { MemberService } from '../services/member.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LocalizeRouterModule,
    RouterLinkActive,
    MatButtonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: User = new User();

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const memberId = params['memberId'];
      this.memberService.getById(memberId).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    });
  }
}
