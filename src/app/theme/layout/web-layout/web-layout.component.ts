import { Component, Injector } from '@angular/core';
import { AbstractLayoutComponent } from '../abstract.layout';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
})
export class WebLayoutComponent extends AbstractLayoutComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}
