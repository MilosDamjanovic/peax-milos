import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {APP_ROUTES} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(APP_ROUTES)
  ]
};
