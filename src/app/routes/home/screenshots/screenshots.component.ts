import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '@shared/components/image-viewer/image-viewer.component';
import { ScreenshotContent } from './screenshots.content';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss'],
})
export class ScreenshotsComponent implements OnInit {
  about;
  images = ScreenshotContent.images;
  phoneImg = ScreenshotContent.phoneImg;
  skills = ScreenshotContent.skills;

  boldText = ScreenshotContent.boldText;
  description = ScreenshotContent.description;
  header2 = ScreenshotContent.header2;
  subHeader1 = ScreenshotContent.subHeader1;
  subHeader2 = ScreenshotContent.subHeader2;
  header1 = ScreenshotContent.header1;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openImgViewer(image) {
    const dialogRef = this.dialog.open(ImageViewerComponent, {
      height: '85vh',
      width: '50vh',
      data: image.src,
    });
  }
}
