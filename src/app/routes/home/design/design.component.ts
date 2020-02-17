import { Component, OnInit } from '@angular/core';
import { DesignContent } from './design.content';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  phoneImg = DesignContent.phoneImg;
  header = DesignContent.header;
  subHeader1 = DesignContent.subHeader1;
  subHeader2 = DesignContent.subHeader2;

  constructor() {}

  ngOnInit(): void {}
}
