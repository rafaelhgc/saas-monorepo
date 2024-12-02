import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ssrConfig } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, ssrConfig);

export default bootstrap;
