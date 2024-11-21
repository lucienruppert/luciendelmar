import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public goToContactPage(): void {
    this.router.navigate(['..', 'contact'], {
      relativeTo: this.route,
    });
  }
}
