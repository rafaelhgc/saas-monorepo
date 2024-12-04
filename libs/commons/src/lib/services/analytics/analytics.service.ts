import { Injectable, InjectionToken, PLATFORM_ID, inject } from '@angular/core';
import mixpanel, { Config } from 'mixpanel-browser';
import { environment } from 'apps/agendaonline-landing/src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

export const ANALYTICS_CONFIG = new InjectionToken<AnalyticsConfig>('ANALYTICS_CONFIG');

export interface AnalyticsConfig {
  platform: string;
  environment: 'production' | 'development';
  token: string;
  configuration: Partial<Config>;
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  config = inject(ANALYTICS_CONFIG);
  platformId = inject(PLATFORM_ID);

  constructor() {
    mixpanel.init(this.config.token, this.config.configuration as Partial<Config>);
  }

  click(componentName: string, customParameters: Record<string, unknown> = {}) {
    const normalized = 'click_' + this.normalize(componentName);
    const parameters = this.normalizeParameters(normalized, customParameters);
    this.send(normalized, parameters);
  }

  view(pageName: string, customParameters: Record<string, unknown> = {}) {
    const normalized = 'view_' + this.normalize(pageName);
    const parameters = this.normalizeParameters(normalized, customParameters);
    this.send(normalized, parameters);
  }

  callback(requestName: string, customParameters: Record<string, unknown> = {}) {
    const normalized = 'callback_' + this.normalize(requestName);
    const parameters = this.normalizeParameters(normalized, customParameters);
    this.send(normalized, parameters);
  }

  error(status: number, request: Record<string, unknown>) {
    const normalized = `error_${status || 500}`;
    const parameters = this.normalizeParameters(normalized, { request });
    this.send(normalized, parameters);
  }

  private send(event: string, parameters: Record<string, unknown>): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (!environment.production || JSON.parse(localStorage.getItem('skip-analytics') || 'false')) {
      console.debug('AnalyticsService', { event, parameters });
      return;
    }

    mixpanel.track(event, { ...parameters });
  }

  private normalize(str: string): string {
    const separatorCaracter = '_';
    return str.toLowerCase().replace(/-/g, separatorCaracter).replace(/ /g, separatorCaracter);
  }

  private normalizeParameters(event: string, parameters: Record<string, unknown>): Record<string, unknown> {
    const normalized: Record<string, unknown> = {};
    const { environment, platform } = this.config;

    Object.keys(parameters).forEach((key) => {
      const normalizedKey = `${event}_${this.normalize(key)}`;
      normalized[normalizedKey] = parameters[key];
    });

    return { ...normalized, environment, platform };
  }
}

export const provideAnalyticsService = (config: AnalyticsConfig) => {
  return { provide: ANALYTICS_CONFIG, useValue: environment.mixpanel };
};
