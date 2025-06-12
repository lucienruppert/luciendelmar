import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { provideClientHydration } from '@angular/platform-browser';

// Define appConfig directly here to avoid import issues
const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(YouTubePlayerModule, DialogModule),
    { provide: DIALOG_DATA, useValue: {} },
    provideClientHydration(),
  ],
};

// Define server config
const serverConfig: ApplicationConfig = {
  providers: [
    // Using a conditional import for provideServerRendering
    ...(() => {
      try {
        // Try to dynamically import it at runtime
        const serverModule = require('@angular/platform-server');
        return [serverModule.provideServerRendering()];
      } catch (e) {
        console.error(
          'Could not load @angular/platform-server. Using empty provider array instead.'
        );
        return [];
      }
    })(),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
