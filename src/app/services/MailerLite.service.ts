import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailerLiteService {

  public async loadScript(): Promise<void> {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    document.head.appendChild(script);

    (window as any)['ml'] =
      // (window as any)['ml'] ||
      function () {
        ((window as any)['ml'].q = (window as any)['ml'].q || []).push(
          arguments
        );
      };
    (window as any)['ml']('account', '944605');
  }
}
