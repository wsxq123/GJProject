import { Component, Input, OnInit } from '@angular/core';
import { IntervalBlockComponent } from '../../../../../shared/interval-block/interval-block.component';
import {
  productTopBlockContent,
  productTopBlockType,
} from './product-top-block-travel-info';

@Component({
  selector: 'app-product-top-block',
  standalone: true,
  templateUrl: './product-top-block.component.html',
  styleUrl: './product-top-block.component.scss',
  imports: [IntervalBlockComponent],
})
export class ProductTopBlockComponent implements OnInit {
  @Input() travelLocation: string = '';
  productTopBlockContent!: productTopBlockType;

  ngOnInit(): void {
    console.log(this.travelLocation);
    switch (this.travelLocation) {
      case 'japen':
        this.productTopBlockContent = productTopBlockContent.japen;
        break;
      case 'korea':
        this.productTopBlockContent = productTopBlockContent.korea;
        break;
      case 'europe':
        this.productTopBlockContent = productTopBlockContent.europe;
        break;

      default:
        console.log('no matched travel location');
        break;
    }
  }
}
