import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DSButtonDirective } from '@saas/design-system';
import { AnalyticsService } from '@saas/commons/services';
import { OptInService } from '../../core/services/opt-in.service';

@Component({
  standalone: true,
  imports: [RouterOutlet, DSButtonDirective, CommonModule, RouterLink],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  analytics = inject(AnalyticsService);
  optInToggle = inject(OptInService);

  get date() {
    return new Date();
  }

  sendClickDemo() {
    this.optInToggle.emit(true);
    this.analytics.click('main-nav-demo');
  }
}
