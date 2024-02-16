import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  Router,
  NavigationEnd,
  RouterLinkActive,
} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import {
  LocalizeRouterService,
  LocalizeRouterModule,
} from '@gilsdav/ngx-translate-router';
import { filter } from 'rxjs';
import { headerBtnItem } from './headerBtnType';
import { LogoBtnComponent } from '../logo-btn/logo-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    MatMenuModule,
    TranslateModule,
    CommonModule,
    LocalizeRouterModule,
    RouterLinkActive,
    LogoBtnComponent,
  ],
})
export class HeaderComponent {
  logoImagUrl = 'assets/image/logo_v2.png';
  bgcolor = 'white';

  private readonly localizeRouterService = inject(LocalizeRouterService);
  private readonly router = inject(Router);
  protected readonly locales = [
    ['en-US', 'English'],
    ['ja-JP', '日本語'],
    ['zh-TW', '繁體中文'],
  ];
  protected isCollapsed = true;
  protected currentUrl = '';

  headerBtnList: headerBtnItem[] = [
    {
      btnText: 'ABOUTUS',
      path: '/about',
      isWarn: false,
    },
    {
      btnText: 'TRAVEL',
      path: '/product',
      isWarn: false,
    },
    {
      btnText: 'MEMBER',
      path: '/memberInfo',
      isWarn: false,
    },
    {
      btnText: 'LOGIN',
      path: '/login',
      isWarn: true,
    },
  ];

  constructor() {
    this.setCurrentUrl();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setCurrentUrl();
      });
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }
}
