import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { APP_CONFIG, AppConfig } from './configs/app.config';
import { ROUTES_CONFIG, RoutesConfig } from './configs/routes.config';
import { SessionService } from './core/services/session.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ThemeModule,
    RoutesModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [SessionService],
      useFactory: (sessionService: SessionService) => sessionService.locale,
    },
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: ROUTES_CONFIG, useValue: RoutesConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
