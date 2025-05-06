import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { ShowVideoComponent } from './app/components/show-video/show-video.component';

// Define global debug function to prevent YouTube API errors
(window as any).debug = function() {};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
