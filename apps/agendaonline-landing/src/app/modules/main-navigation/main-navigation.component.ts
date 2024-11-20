import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DSButtonDirective } from '@saas/design-system';
import { AnalyticsService } from '@saas/commons/services';

@Component({
  standalone: true,
  imports: [RouterOutlet, DSButtonDirective, CommonModule, RouterLink],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  analytics = inject(AnalyticsService);

  get date() {
    return new Date();
  }

  sendClickDemo() {
    this.analytics.click('main-nav-demo');
  }
}
