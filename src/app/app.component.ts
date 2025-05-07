import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
})
export class AppComponent implements AfterViewInit {
  private apiLoaded: boolean = false;
  private isMobile: boolean = false;
  private lastToggleTime: number = 0;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Skip DOM and window operations on the server
    if (typeof window === 'undefined') {
      return;
    }

    // Simple check if we're on a mobile device
    this.isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Load YouTube API if needed
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  toggleSidenav(event: Event) {
    // Only allow toggle on real click events (not touchstart, pointerdown, etc)
    if (event && (event as any).type !== 'click') {
      return;
    }

    // Prevent the default action and stop event bubbling
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Debounce toggle operations
    const now = Date.now();
    if (now - this.lastToggleTime < 300) {
      // 300ms debounce
      return;
    }
    this.lastToggleTime = now;

    // Safety check
    if (!this.sidenav) {
      return;
    }

    this.sidenav.toggle();
  }

  // Separate method for navigation
  navigateTo(event: Event, route: string) {
    // Prevent the default action and stop event bubbling
    if (event) {
      event.preventDefault();
      event.stopPropagation();

      // IMPORTANT: For mobile devices, only handle click events, ignore touchstart
      if (this.isMobile && event.type === 'touchstart') {
        return;
      }
    }

    // Simply close the sidenav if it exists and is open
    if (this.sidenav && this.sidenav.opened) {
      this.sidenav.close();
    }
  }
}
