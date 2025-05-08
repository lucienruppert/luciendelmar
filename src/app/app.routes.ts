import { Routes } from '@angular/router';
import { PathComponent } from './components/path/path.component';
import { CirclingComponent } from './components/circling/circling.component';
import { VideosComponent } from './components/videos/videos.component';
import { VisionComponent } from './components/vision/vision.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowVideoComponent } from './components/show-video/show-video.component';

export default [ShowVideoComponent];
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // Add prerender option for all routes
    data: { prerender: true },
  },
  {
    path: 'path',
    component: PathComponent,
    data: { prerender: true },
  },
  {
    path: 'methods',
    redirectTo: 'methods/circling',
    pathMatch: 'full',
  },
  {
    path: 'methods/circling',
    component: CirclingComponent,
    data: { prerender: true },
  },
  {
    path: 'videos',
    component: VideosComponent,
    data: { prerender: true },
  },
  {
    path: 'vision',
    component: VisionComponent,
    data: { prerender: true },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { prerender: true },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { prerender: true },
  },
];
