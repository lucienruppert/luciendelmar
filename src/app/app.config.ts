import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ),
    provideAnimationsAsync(),
    importProvidersFrom(YouTubePlayerModule, DialogModule),
    { provide: DIALOG_DATA, useValue: {} },
    provideClientHydration(),
  ],
};
