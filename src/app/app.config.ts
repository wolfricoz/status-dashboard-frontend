import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, UrlHandlingStrategy} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {CustomUrlHandlingStrategy} from './custom-url-handling.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy},
    provideHttpClient()]
};
