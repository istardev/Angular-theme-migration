import { Directive, Input, ElementRef, HostListener, OnInit, NgZone, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input('ratio') parallaxRatio: number = 1;
  destroy$ = new Subject<boolean>();
  initialTop = 0;

  constructor(
    private eleRef: ElementRef,
    private ngZone: NgZone
  ) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

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
      .pipe(takeUntil(this.destroy$))
      .subscribe((e) => this.onWindowScroll(e));
  }
  onWindowScroll(event) {
    const top = this.initialTop - (window.scrollY * this.parallaxRatio);
    this.eleRef.nativeElement.style.transform = `translateY(${top}px)`;
  }
}
