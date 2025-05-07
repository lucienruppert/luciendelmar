import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
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
export class AppComponent {
  private apiLoaded: boolean = false;
  private isToggling: boolean = false;
  @ViewChild('sidenav') sidenav: any;

  ngOnInit() {
    // Skip DOM and window operations on the server
    if (typeof window === 'undefined') {
      return;
    }

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  toggleSidenav(event: Event) {
    // Prevent event bubbling
    event.preventDefault();
    event.stopPropagation();

    // Debounce to prevent multiple rapid toggles
    if (this.isToggling) {
      return;
    }

    this.isToggling = true;

    // Add a small delay before actually toggling to prevent ghost clicks
    // This is specifically helpful for mobile browsers
    setTimeout(() => {
      this.sidenav.toggle();

      // Reset after a short delay
      setTimeout(() => {
        this.isToggling = false;
      }, 300);
    }, 10);
  }
}
