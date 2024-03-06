import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberApiComponent } from './member-api.component';

describe('MemberApiComponent', () => {
  let component: MemberApiComponent;
  let fixture: ComponentFixture<MemberApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
