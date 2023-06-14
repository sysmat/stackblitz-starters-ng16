import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as Sentry from '@sentry/angular-ivy';
import { BrowserTracing } from '@sentry/angular-ivy';

function initSentry() {
  Sentry.init({
    environment: window.location.hostname,
    dsn: 'https://xxxx',
    integrations: [
      new BrowserTracing({
        tracingOrigins: ['xxx', 'xxxx'],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],
    release: 'xxxx',
    tracesSampleRate: 1.0,
  });
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

initSentry();
