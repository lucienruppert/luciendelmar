import { Component, OnInit } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ShowVideoComponent } from '../show-video/show-video.component';
import videos from './videos';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

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
    DialogModule,
  ],
})
export class VideosComponent implements OnInit {
  public videoData: Array<{
    id: string;
    time: string;
    thumbnail: string;
    slug: string;
  }> = videos;
  private dialogRef: any;

  constructor(
    private dialog: Dialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to both params and queryParams to handle navigation
    this.route.params.subscribe((params) => {
      const slug = params['videoId'];
      if (slug) {
        // If we have a slug in the URL, try to find and open it
        const video = this.videoData.find((v) => v.slug === slug);
        if (video) {
          this.openVideoDialog(video.id);
        } else {
          // If video not found, redirect to videos page
          this.router.navigate(['/videos']);
        }
      }
    });
  }

  public openDialog(id: string): void {
    // Find the video by ID to get its slug
    const video = this.videoData.find((v) => v.id === id);
    if (video) {
      // Navigate using the slug
      this.router.navigate(['/videos', video.slug]);
    }
  }

  private openVideoDialog(id: string): void {
    // Close any existing dialog
    if (this.dialogRef) {
      this.dialogRef.close();
    }

    // Open the dialog with proper sizing
    this.dialogRef = this.dialog.open(ShowVideoComponent, {
      data: { id },
      backdropClass: 'dialog-backdrop',
      panelClass: 'video-dialog',
      disableClose: false,
      hasBackdrop: true,
      width: '80vw',
      height: '80vh',
    });

    // When dialog closes, navigate back to videos page
    this.dialogRef.closed.subscribe(() => {
      this.router.navigate(['/videos']);
    });
  }
}
