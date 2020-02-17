import { Directive, ElementRef } from '@angular/core';
import { AnimateDirective } from './animate.directive';
import { ShareService } from '@shared/services/share.service';

@Directive({
  selector: '[fadeScrollAnimate]',
})
export class FadeScrollAnimateDirective extends AnimateDirective {
  constructor(protected element: ElementRef, protected shareService: ShareService) {
    super(element, shareService, 'fade-in', 'fade-out');
  }
}
