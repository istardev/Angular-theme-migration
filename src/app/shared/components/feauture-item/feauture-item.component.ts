import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feauture-item',
  templateUrl: './feauture-item.component.html',
  styleUrls: ['./feauture-item.component.scss']
})
export class FeautureItemComponent implements OnInit {

  constructor() { }
  @Input() item: any;
  @Input() isReverse: boolean;

  ngOnInit(): void {}

}
