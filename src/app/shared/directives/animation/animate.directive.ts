import { AfterViewInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { ShareService } from '@shared/services/share.service';

export class AnimateDirective implements AfterViewInit, OnDestroy {
  animationInClass = '';
  animationOutClass = '';

  offsetTop;
  screenHeight;
  screenWidth;
  @Input() offset = 0;
  @Input() translateY = 0;
  @Input() offsetMobile = 0;
  offsetMobileLocal = 0;
  @Input() delay = 0;
  scrollEvent$;

  constructor(
    protected element: ElementRef,
    protected shareService: ShareService,
    animationInClass,
    animationOutClass
  ) {
    this.animationInClass = animationInClass;
    this.animationOutClass = animationOutClass;
  }

  getRatio(screen) {
    if (screen < 500) {
      return 0.9;
    } else if (screen < 1200) {
      return 0.8;
    } else {
      return 0.7;
    }
  }

  ngAfterViewInit() {
    const ratio = this.getRatio(window.screen.width);
    this.screenHeight = window.screen.height * ratio + this.offset;
    this.scrollEvent$ = this.shareService.offsetTop.subscribe(() => {
      // this.element.nativeElement.innerHTML = this.element.nativeElement.getBoundingClientRect().top - this.screenHeight;
      // this.element.nativeElement.innerHTML = ratio;
      if (this.delay) {
        setTimeout(() => {
          this.updateClass();
        }, this.delay);
      } else {
        this.updateClass();
      }
    });
  }

  updateClass() {
    if (this.element.nativeElement.getBoundingClientRect().top - this.screenHeight < 0) {
      this.element.nativeElement.classList.add(this.animationInClass);
      this.element.nativeElement.classList.remove(this.animationOutClass);
    } else {
      this.element.nativeElement.classList.remove(this.animationInClass);
      this.element.nativeElement.classList.add(this.animationOutClass);
    }
  }

  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.scrollEvent$ ? this.scrollEvent$.unsubscribe() : null;
  }
}
