import { Injectable, Inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeDEExtra from '@angular/common/locales/extra/de';
import localeEN from '@angular/common/locales/en';
import localeENExtra from '@angular/common/locales/extra/en';
import { NotificationService } from '@shared/services/notification.service';
import { APP_CONFIG } from 'app/configs/app.config';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _locale: string;

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private notificationService: NotificationService
  ) {}

  get locale(): string {
    return this._locale || this.appConfig.locales.german;
  }

  registerLocale(locale: string) {
    if (locale) {
      this._locale = locale;
      switch (locale) {
        case this.appConfig.locales.german: {
          registerLocaleData(localeDE, this.appConfig.locales.german, localeDEExtra);
          break;
        }
        case this.appConfig.locales.english: {
          registerLocaleData(localeEN, this.appConfig.locales.english, localeENExtra);
          break;
        }
        default: {
          this.notifyNotSupportedLocale(locale);
          break;
        }
      }
    } else {
      this.notifyNotSupportedLocale(locale);
    }
  }

  private notifyNotSupportedLocale(locale: string) {
    this.notificationService.showError(`Locale ${locale} is not supported yet`);
  }
}
