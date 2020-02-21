import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {

  constructor() { }
  @Input() imageSrc: string;
  @Input() index: number;
 
  ngOnInit(): void {
   
  }

}
