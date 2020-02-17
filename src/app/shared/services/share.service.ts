import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  offsetTop = new BehaviorSubject(null);
  activeRouter = new BehaviorSubject(null);

  setOffsetTop(y) {
    this.offsetTop.next(y);
  }

  setActiveRouter(y) {
    this.activeRouter.next(y);
  }
}
