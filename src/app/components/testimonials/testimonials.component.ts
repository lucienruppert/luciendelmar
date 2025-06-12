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
      text: 'A regressziós folyamat során olyan mély belátásokat nyertem, amelyek segítettek megérteni és elengedni régóta húzódó érzelmi mintáimat. Lucien biztonságos teret teremtett a munkához, és szakértő módon vezetett végig az úton.',
      author: 'Anna K.',
    },
  ];
}
