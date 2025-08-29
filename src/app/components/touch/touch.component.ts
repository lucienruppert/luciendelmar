import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.css'],
})
export class TouchComponent {
  constructor(private router: Router) { }

  public goToTestimonialsPage(): void {
    this.router.navigate(['/testimonials']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
