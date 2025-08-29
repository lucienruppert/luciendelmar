import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-holding-conversation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holding-conversation.component.html',
  styleUrls: ['./holding-conversation.component.css'],
})
export class HoldingConversationComponent {
  constructor(private router: Router) {}

  public goToContactPage(): void {
    this.router.navigate(['/services']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
