import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AnalyticsConfig, provideAnalyticsService } from '@saas/commons/services';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideClientHydration } from '@angular/platform-browser';

export const config: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnalyticsService(environment.mixpanel as AnalyticsConfig),
  ],
};
