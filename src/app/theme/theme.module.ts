import { NgModule } from '@angular/core';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { HeaderLayoutComponent } from './sections/header/header-layout/header-layout.component';
import { FooterLayoutComponent } from './sections/footer/footer-layout/footer-layout.component';
import { BulletNavComponent } from './components/bullet-nav/bullet-nav.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

const COMPONENTS = [
  WebLayoutComponent,
  AuthLayoutComponent,
  HeaderLayoutComponent,
  FooterLayoutComponent,
  BulletNavComponent,
  SideNavbarComponent,
  TopNavbarComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class ThemeModule {}
