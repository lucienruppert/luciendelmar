import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'A folyamat során mély belátásokat nyertem, és jelentős változásokat tapasztaltam az életemben.',
      author: 'Anna K.',
    },
    {
      text: 'Lucien szakértelme és empatikus megközelítése segített feldolgozni régóta húzódó problémáimat.',
      author: 'Péter M.',
    },
    {
      text: 'A terápiás sessions után sokkal tisztábban látom az utamat és céljaimat.',
      author: 'Zsófia T.',
    },
  ];
}
