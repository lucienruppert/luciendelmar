import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public goToBenefitsPage(): void {
    this.router.navigate(['benefits'], {
      relativeTo: this.route,
    });
  }

  public goToVisionPage(): void {
    this.router.navigate(['vision'], {
      relativeTo: this.route,
    });
  }
}
