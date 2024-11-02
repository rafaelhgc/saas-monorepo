import { Route } from '@angular/router';
import { MainNavigationComponent } from './modules/main-navigation/main-navigation.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainNavigationComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/landing/landing.component').then((m) => m.LandingComponent),
      },
    ],
  },
];
