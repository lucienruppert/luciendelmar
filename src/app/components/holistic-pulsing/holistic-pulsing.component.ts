import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-holistic-pulsing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holistic-pulsing.component.html',
  styleUrls: ['./holistic-pulsing.component.css'],
})
export class HolisticPulsingComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public goToContactPage(): void {
    this.router.navigate(['/services']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
