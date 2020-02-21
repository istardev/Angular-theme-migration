import { Component, OnInit, Input } from '@angular/core';
import { Social } from '../../interfaces/social.interface'
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
@Input() social: Array<Social>;
  constructor() { }

  ngOnInit(): void {
  }

}
