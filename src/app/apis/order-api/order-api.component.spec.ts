import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderApiComponent } from './order-api.component';

describe('OrderApiComponent', () => {
  let component: OrderApiComponent;
  let fixture: ComponentFixture<OrderApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
