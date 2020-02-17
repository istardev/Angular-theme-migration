import { Component, OnInit } from '@angular/core';
import { GetItContent } from './get-it.content';

@Component({
  selector: 'app-get-it',
  templateUrl: './get-it.component.html',
  styleUrls: ['./get-it.component.scss'],
})
export class GetItComponent implements OnInit {
  header = GetItContent.header;
  subHeader1 = GetItContent.subHeader1;
  subHeader2 = GetItContent.subHeader2;
  iphone = GetItContent.iphone;
  android = GetItContent.android;

  constructor() {}

  ngOnInit(): void {}
}
