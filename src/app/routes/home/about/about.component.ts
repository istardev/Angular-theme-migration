import { Component, OnInit } from '@angular/core';
import { AboutContent } from './about.content';

@Component({
  selector: 'app-home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  scrollTop = 0;
  header = AboutContent.header;
  subHeader1 = AboutContent.subHeader1;
  subHeader2 = AboutContent.subHeader2;
  iphone = AboutContent.iphone;
  android = AboutContent.android;

  ngOnInit(): void {}
}
