import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { NavLogService } from './services/nav-log.service';
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
  showMethodsSubmenu: boolean = false;

  // expose navLog publicly for template binding
  constructor(private cdr: ChangeDetectorRef, public navLog: NavLogService) {}

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

  /** Opens the sidenav explicitly on hamburger click */
  openSidenav(event: Event) {
    // Log entry
    this.navLog.add('openSidenav triggered, event:' + event.type);
    // Prevent default and stop other handlers
    event.preventDefault();
    event.stopImmediatePropagation();
    // Debounce multiple taps
    const now = Date.now();
    if (now - this.lastToggleTime < 400) {
      return;
    }
    this.lastToggleTime = now;
    // Open if not already open
    if (this.sidenav && !this.sidenav.opened) {
      this.navLog.add('Opening sidenav');
      this.sidenav.open();
    }
  }

  /** Closes the sidenav explicitly on close button or navigation */
  closeSidenav(event?: Event) {
    // Log close action
    this.navLog.add('closeSidenav triggered, event:' + (event?.type || 'none'));
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.sidenav && this.sidenav.opened) {
      this.navLog.add('sidenav.close()');
      this.sidenav.close();
    }
  }

  // Toggle submenu for methods
  toggleSubmenu(submenu: string) {
    if (submenu === 'methods') {
      this.showMethodsSubmenu = !this.showMethodsSubmenu;
      this.navLog.add('Toggled methods submenu to: ' + this.showMethodsSubmenu);
    }
    // Don't close sidenav when toggling submenu
  }

  // Separate method for navigation
  navigateTo(event: Event, route: string) {
    this.navLog.add('navigateTo triggered: ' + route + ', event:' + event.type);
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
      this.navLog.add('sidenav.close() via navigateTo');
      this.sidenav.close();
    }
  }
}
