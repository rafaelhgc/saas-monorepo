import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DSButtonDirective } from '@saas/design-system';

@Component({
  standalone: true,
  imports: [RouterOutlet, DSButtonDirective, CommonModule, RouterLink],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  get date() {
    return new Date();
  }
}
