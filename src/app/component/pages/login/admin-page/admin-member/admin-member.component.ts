import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MemberService } from '@api/member-api/member.service';
import { Member } from '@api/member-api/memberType';

@Component({
  selector: 'app-admin-member',
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
  templateUrl: './admin-member.component.html',
})
export class AdminMemberComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.onSearchAll();
    this.onSearchByID();
  }

  inputIDValue: string = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'account',
    'password',
    'email',
    'phone',
    'address',
    'delete',
  ];

  dataSource: Member[] = [];
  membersData: Member[] = [];

  onSearchByID() {
    this.memberService
      .getMemberByID(this.inputIDValue)
      .subscribe((member: Member) => {
        this.dataSource = [];
        this.dataSource.push(member);
      });
  }

  onSearchAll() {
    this.memberService.getMembers().subscribe((members: Member[]) => {
      this.dataSource = [];
      this.dataSource = members;
    });
  }

  fakeMemberData = {
    // memberId: '99',
    memberName: 'TinaTest',
    memberAccount: 'TinaTest',
    memberPassword: '1234',
    memberEmail: 'TinaTest@mail.com',
    memberPhone: '09870',
    memberAddress: '台北',
  };

  onAddMember(member: Member) {
    this.memberService
      .addMember(member)
      .subscribe((result) => console.log(result));
  }

  onDeleteMember(memberID: string) {
    this.memberService
      .deleteMember(memberID)
      .subscribe((result) => console.log(result));
    console.log('memberID: ' + memberID);
    // this.onSearchAll();
  }

  onInput(box: string) {
    console.log(box);
    this.inputIDValue = box;
  }
}
