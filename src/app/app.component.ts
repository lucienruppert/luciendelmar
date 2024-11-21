import { Component } from '@angular/core';
import { MailerLiteService } from './services/MailerLite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private apiLoaded: boolean = false;
  public isMobile: boolean = false;
  public activeMenu: string = '';

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    if (window.screen.width <= 768) this.isMobile = true;
  }
}
