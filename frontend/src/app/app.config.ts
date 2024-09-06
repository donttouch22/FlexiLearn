import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideClientHydration(),
  provideHttpClient(withFetch(),),
  provideAuth0({
    domain: 'dev-3x6di7i1o663vxh0.us.auth0.com',
    clientId: 'Ly4qi7N5RtYOvsatP4etHIGo1tzbi4dm',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }),
  ]
};
