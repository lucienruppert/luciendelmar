import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrl: './show-video.component.css',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, MatIconModule],
})
export class ShowVideoComponent implements AfterViewInit, OnInit {
  public id: string = '';
  public width: number = 0;
  public height: number = 0;
  private apiLoaded = false;
  @ViewChild('video')
  video!: ElementRef<HTMLElement>;

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: { id: string }
  ) {
    this.id = data.id;
    this.setPlayerSize();
  }

  ngOnInit() {
    if (!this.apiLoaded) {
      // Load the YouTube API if not already loaded
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.video!.nativeElement.blur();
    }, 0);
  }

  setPlayerSize(): void {
    let widthSizeByScreen = 0.4;
    if (window.screen.width <= 768) widthSizeByScreen = 0.9;
    this.width = window.screen.width * widthSizeByScreen;
    const aspectRatio = 9 / 16;
    this.height = this.width * aspectRatio;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
