import { Directive, ElementRef } from '@angular/core';
import { ShareService } from '@shared/services/share.service';
import { AnimateDirective } from './animate.directive';

@Directive({
  selector: '[moveScrollRightAnimate]',
})
export class MoveScrollRightAnimateDirective extends AnimateDirective {
  constructor(protected element: ElementRef, protected shareService: ShareService) {
    super(element, shareService, 'slide-in-right', 'slide-out-right');
  }
}
