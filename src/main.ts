import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(FlexLayoutModule, YouTubePlayerModule),
  ],
}).catch((err) => console.error(err));
