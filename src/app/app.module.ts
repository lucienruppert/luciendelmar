import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { VideosComponent } from './components/videos/videos.component';
import { EventsComponent } from './components/events/events.component';
import { MethodComponent } from './components/method/method.component';
import { MaterialModules } from './material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ShowVideoComponent } from './components/show-video/show-video.component';
import { VisionComponent } from './components/vision/vision.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { MailerLiteService } from './services/MailerLite.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    VideosComponent,
    EventsComponent,
    MethodComponent,
    ShowVideoComponent,
    VisionComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    BenefitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    FlexLayoutModule,
    YouTubePlayerModule,
  ],
  providers: [provideAnimationsAsync(), MailerLiteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
