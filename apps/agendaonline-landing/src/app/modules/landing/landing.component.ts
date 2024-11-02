import { Component } from '@angular/core';
import { DSButtonDirective, DSInputFieldDirective } from '@monorepo/design-system';

@Component({
  standalone: true,
  imports: [DSButtonDirective, DSInputFieldDirective],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
