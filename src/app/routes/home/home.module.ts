import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home.layout.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { DesignComponent } from './design/design.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GetItComponent } from './get-it/get-it.component';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS = [
  HomeLayoutComponent,
  AboutComponent,
  FeaturesComponent,
  DesignComponent,
  ScreenshotsComponent,
  TestimonialsComponent,
  GetItComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class HomeModule {}
