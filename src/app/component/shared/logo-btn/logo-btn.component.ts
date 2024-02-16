import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-logo-btn',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage],
  template: ` <button
    mat-button
    [routerLinkActiveOptions]="{ exact: true }"
    [routerLink]="'/'"
    routerLinkActive="active"
    style="border: none; background-color:{{ bgColor }}; cursor: pointer;">
    <img
      [ngSrc]="logoImagUrl"
      alt="logoImagUrl"
      width="170"
      height="50"
      priority />
  </button>`,
})
export class LogoBtnComponent {
  logoImagUrl = 'assets/image/logo_v2.png';
  @Input() bgColor: string = '';
}
