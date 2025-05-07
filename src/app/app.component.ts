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
  private lastToggleTime: number = 0;
  private isMobile: boolean = false;
  private sidenavReady: boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Skip DOM and window operations on the server
    if (typeof window === 'undefined') {
      return;
    }

    // Check if we're on a mobile device
    this.isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    // Add click handlers to document to help close any ghost menu instances
    if (this.isMobile) {
      document.addEventListener(
        'click',
        (event) => {
          // Only handle document clicks if sidenav is open
          if (this.sidenavReady && this.sidenav && this.sidenav.opened) {
            // Check if click is outside the sidenav
            const clickTarget = event.target as HTMLElement;
            if (!clickTarget.closest('mat-sidenav')) {
              this.sidenav.close();
            }
          }
        },
        { passive: true }
      );
    }
  }

  ngAfterViewInit() {
    // Mark the sidenav as ready after view init
    this.sidenavReady = true;
    this.cdr.detectChanges();
  }

  toggleSidenav(event: Event) {
    // Always prevent default and bubbling to prevent ghost clicks
    if (event) {
      event.preventDefault();
      event.stopPropagation();

      // For touch events, we need extra handling to prevent the issue
      if (event.type === 'touchstart' && this.isMobile) {
        // Only process the first touch to prevent multiple events
        const touchEvent = event as TouchEvent;
        if (touchEvent.touches.length > 1) {
          return; // Ignore multi-touch events
        }
      }
    }

    // Safety check
    if (!this.sidenavReady || !this.sidenav) {
      return;
    }

    // More aggressive mobile debouncing for the issue you're experiencing
    const now = Date.now();
    if (now - this.lastToggleTime < 800) {
      // 800ms cooldown, increased from 500ms
      console.log('Debouncing sidenav toggle, too soon');
      return;
    }
    this.lastToggleTime = now;

    // Special handling for mobile devices
    if (this.isMobile) {
      // Store current state before we change it
      const wasOpen = this.sidenav.opened;

      // Cancel any pending animations
      this.sidenav.openedChange.emit(wasOpen);

      // Use requestAnimationFrame for smoother operation
      requestAnimationFrame(() => {
        // Directly control open/close rather than using toggle to be more predictable
        if (wasOpen) {
          console.log('Closing sidenav');
          this.sidenav.close();
        } else {
          console.log('Opening sidenav');
          this.sidenav.open();
        }
      });
    } else {
      // For non-mobile, just toggle normally
      this.sidenav.toggle();
    }
  }

  // Separate method for navigation to avoid interference with toggle
  navigateTo(event: Event, route: string) {
    // Always prevent default to avoid double-handling
    if (event) {
      event.preventDefault();
      event.stopPropagation();

      // Skip handling if it's a touch event and we already processed it
      if (
        event.type === 'touchstart' &&
        this.lastToggleTime > Date.now() - 100
      ) {
        return;
      }
    }

    // For mobile, use a timeout to allow the route change to process first
    // then close the sidenav after a short delay
    if (
      this.isMobile &&
      this.sidenavReady &&
      this.sidenav &&
      this.sidenav.opened
    ) {
      // Wait a bit to close the menu to allow the navigation to start
      setTimeout(() => {
        this.sidenav.close();
      }, 100);
    } else if (this.sidenavReady && this.sidenav && this.sidenav.opened) {
      // For desktop just close immediately
      this.sidenav.close();
    }
  }
}
