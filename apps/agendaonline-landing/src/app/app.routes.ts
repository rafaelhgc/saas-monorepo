import { Route } from '@angular/router';
import { MainNavigationComponent } from './modules/main-navigation/main-navigation.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainNavigationComponent,
    children: [
      {
        path: 'blog/:slug',
        loadComponent: () => import('./modules/blog/blog-post/blog-post.component').then((m) => m.BlogPostComponent),
      },
      {
        path: 'blog',
        loadComponent: () => import('./modules/blog/blog-list/blog-list.component').then((m) => m.BlogListComponent),
      },
      {
        path: '',
        loadComponent: () => import('./modules/landing/landing.component').then((m) => m.LandingComponent),
      },
    ],
  },
];
