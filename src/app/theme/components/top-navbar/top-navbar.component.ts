import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavConfig } from '@shared/interfaces/navConfig';
import { ShareService } from '@shared/services/share.service';
import { menus } from '../../../routes/home/config/menu'
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  @Input('navConfig') navConfig: NavConfig;

  isTop;
  activeRouter;
  showScrollTop;
  menu$;
  showNav = false;
  menus=menus;
  menu={
    isRound: true
  }
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private shareService: ShareService) {}

  ngOnInit() {
    this.shareService.offsetTop.subscribe(offsetTop => {
      this.isTop = offsetTop == null ? null : offsetTop > 0;
      this.showScrollTop = offsetTop > 300;
    });

    this.shareService.activeRouter.subscribe(activeRouter => {
      this.activeRouter = activeRouter;
    });
  }

  public onToggleSidenav = () => {
    this.showNav = true;
  };

  onScroll(id) {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.scrollIntoView({
        behavior: 'smooth',
        block: id === 'screenshots' ? 'start' : 'center',
        inline: id === 'screenshots' ? 'start' : 'center',
      });
    }, 100);
    this.showNav = false;
  }
}
