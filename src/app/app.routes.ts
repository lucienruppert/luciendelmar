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
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'method',
    component: MethodComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'vision',
    component: VisionComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
  },
];
