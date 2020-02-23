import { Component, HostListener, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ShareService } from '@shared/services/share.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit, OnDestroy {
  imageOverlay = false;
  scrollTop = 0;
  destroy$ = new Subject<boolean>();

  constructor(
    private shareService: ShareService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.addScrollSubscription();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  addScrollSubscription() {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$), throttleTime(30))
      .subscribe(() => this.moveBackground());
  }

  moveBackground() {
    this.shareService.setOffsetTop(window.scrollY);
  }
}
