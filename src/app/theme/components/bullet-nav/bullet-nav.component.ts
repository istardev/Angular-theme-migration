import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { ShareService } from '@shared/services/share.service';
import { from } from 'rxjs';
import { filter, max } from 'rxjs/operators';
import { NavConfig } from '@shared/interfaces/navConfig';

@Component({
  selector: 'app-bullet-nav',
  templateUrl: './bullet-nav.component.html',
  styleUrls: ['./bullet-nav.component.scss'],
})
export class BulletNavComponent implements OnInit, AfterViewInit {
  @Input('navConfig') navConfig: NavConfig;
  ids;
  activeRouter;
  menu$;

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {
    this.ids = this.navConfig.menus;
    this.activeRouter = this.ids[0];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ids.forEach((router, index) => {
        const el = document.getElementById(router.htmlId);
        router.value = el.offsetTop - index * 100;
      });
      this.shareService.offsetTop.subscribe(offsetTop => {
        from(this.ids)
          .pipe(
            filter(router => router['value'] < offsetTop),
            max()
          )
          .subscribe(router => {
            this.activeRouter = router;
            this.shareService.setActiveRouter(router);
          });
      });
    }, 1000);
  }

  onScroll(id) {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.scrollIntoView({
        behavior: 'smooth',
        block: id === 'screenshots' ? 'start' : 'center',
        inline: id === 'screenshots' ? 'start' : 'center',
      });
    }, 100);
  }
}
