import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DSButtonDirective, DSInputFieldDirective } from '@monorepo/design-system';

@Component({
  standalone: true,
  imports: [DSButtonDirective, DSInputFieldDirective, RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
