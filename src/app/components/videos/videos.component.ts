import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ShowVideoComponent } from '../show-video/show-video.component';
import videos from './videos';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
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
export class VideosComponent {
  public videoData: Array<{ id: string; time: string; thumbnail: string }> =
    videos;

  constructor(private dialog: Dialog) {}

  public openDialog(id: string): void {
    this.dialog.open(ShowVideoComponent, {
      data: { id },
    });
  }
}
