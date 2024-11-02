import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DSButtonDirective } from '@monorepo/design-system';

@Component({
  standalone: true,
  imports: [RouterOutlet, DSButtonDirective],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {}
