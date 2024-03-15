import { Component } from '@angular/core';
import { IntervalBlockComponent } from '../../../shared/interval-block/interval-block.component';
@Component({
  selector: 'app-check-order',
  standalone: true,
  templateUrl: './check-order.component.html',
  styleUrl: './check-order.component.scss',
  imports: [IntervalBlockComponent],
})
export class CheckOrderComponent {}
