import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, config).catch((err) => console.error(err));
