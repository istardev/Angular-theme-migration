import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() firstBtn: string;
  @Input() secondBtn: string;

  constructor() { }

  ngOnInit(): void {
  }

}
