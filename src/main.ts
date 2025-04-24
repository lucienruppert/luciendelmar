import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { ShowVideoComponent } from './app/components/show-video/show-video.component';

// Define global debug function to prevent YouTube API errors
(window as any).debug = function() {};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(FlexLayoutModule, YouTubePlayerModule, DialogModule),
    { provide: DIALOG_DATA, useValue: {} },
  ]
}).catch((err) => console.error(err));
