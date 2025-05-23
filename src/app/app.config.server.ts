import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// Import app configuration directly
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { provideClientHydration } from '@angular/platform-browser';

// Define application config inline to avoid import issues
const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(FlexLayoutModule, YouTubePlayerModule, DialogModule),
    { provide: DIALOG_DATA, useValue: {} },
    provideClientHydration(),
  ],
};

// Server-specific configuration with FlexLayoutServerModule
const serverConfig: ApplicationConfig = {
  providers: [importProvidersFrom(FlexLayoutServerModule)],
};

// Use dynamic import for server rendering if available at runtime
try {
  const serverModule = require('@angular/platform-server');
  if (serverModule && serverModule.provideServerRendering) {
    serverConfig.providers.push(serverModule.provideServerRendering());
  }
} catch (e) {
  console.warn('Could not load @angular/platform-server module');
}

export const config = mergeApplicationConfig(appConfig, serverConfig);
