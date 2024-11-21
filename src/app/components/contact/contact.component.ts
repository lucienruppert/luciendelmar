import { Component, AfterViewInit } from '@angular/core';
import { MailerLiteService } from '../../services/MailerLite.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  constructor(private mailerLiteService: MailerLiteService) {}

  public async ngAfterViewInit() {
    await this.mailerLiteService.loadScript();
  }
}
