import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent {
  constructor(private router: Router) {}

  public goToSessionsPage(): void {
    this.router.navigate(['/sessions']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
