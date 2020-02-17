import { Component, HostListener, OnInit } from '@angular/core';
import { ShareService } from '@shared/services/share.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  imageOverlay = false;
  scrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  public moveBackground() {
    this.shareService.setOffsetTop(window.scrollY);
  }

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {}
}
