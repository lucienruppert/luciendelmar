import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class SessionsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public navigateWithScroll(path: string): void {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  public goToContactPage(): void {
    this.router.navigate(['/contact']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
