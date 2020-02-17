import { OnInit, AfterViewInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '@shared/interfaces/menu';
import { NavConfig } from '@shared/interfaces/navConfig';

export abstract class AbstractLayoutComponent implements OnInit, AfterViewInit {
  navConfig: NavConfig;
  private activatedRoute: ActivatedRoute;

  constructor(private injector: Injector) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((navConfig: NavConfig) => {
      this.navConfig = navConfig;
    });
  }

  ngAfterViewInit() {}
}
