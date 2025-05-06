import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MethodComponent } from './components/method/method.component';
import { VideosComponent } from './components/videos/videos.component';
import { EventsComponent } from './components/events/events.component';
import { VisionComponent } from './components/vision/vision.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ShowVideoComponent } from './components/show-video/show-video.component';

export default [ShowVideoComponent];
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // Add prerender option for all routes
    data: { prerender: true }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { prerender: true }
  },
  {
    path: 'method',
    component: MethodComponent,
    data: { prerender: true }
  },
  {
    path: 'videos',
    component: VideosComponent,
    data: { prerender: true }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { prerender: true }
  },
  {
    path: 'vision',
    component: VisionComponent,
    data: { prerender: true }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { prerender: true }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { prerender: true }
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
    data: { prerender: true }
  },
];
