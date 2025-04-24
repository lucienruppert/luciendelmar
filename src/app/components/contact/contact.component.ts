import { Component, AfterViewInit } from '@angular/core';
import { MailerLiteService } from '../../services/MailerLite.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
export class ContactComponent implements AfterViewInit {
  constructor(private mailerLiteService: MailerLiteService) {}

  public async ngAfterViewInit() {
    await this.mailerLiteService.loadScript();
  }
}
