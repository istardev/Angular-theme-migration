import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FadeScrollAnimateDirective } from './directives/animation/fade-scroll-animate.directive';
import { MoveScrollAnimateDirective } from './directives/animation/move-scroll-animate.directive';
import { MoveScrollRightAnimateDirective } from './directives/animation/move-scroll-right-animate.directive';
import { MoveScrollLeftAnimateDirective } from './directives/animation/move-scroll-left-animate.directive';
import { ParallaxDirective } from './directives/parallax/parallax.directive';

import { ScreenshotComponent } from './components/screenshot/screenshot.component';
import { FeautureItemComponent } from './components/feauture-item/feauture-item.component';
import { SocialComponent } from './components/social/social.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


const THIRD_MODULES = [MaterialModule, FlexLayoutModule, CarouselModule];
const COMPONENTS = [ImageViewerComponent, ScreenshotComponent, FeautureItemComponent, ButtonsComponent, SocialComponent];
const COMPONENTS_DYNAMIC = [];
const DIRECTIVES = [
  // animation
  FadeScrollAnimateDirective,
  MoveScrollAnimateDirective,
  MoveScrollRightAnimateDirective,
  MoveScrollLeftAnimateDirective,
  ParallaxDirective
];
const PIPES = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...THIRD_MODULES],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SharedModule {}
