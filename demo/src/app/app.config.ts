import {
  ApplicationConfig,
  APP_INITIALIZER,
  ErrorHandler,
} from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import * as Sentry from '@sentry/angular-ivy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
};
