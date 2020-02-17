import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from '../../shared/services/logger.service';
import { ROUTES_CONFIG } from 'app/configs/routes.config';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(ROUTES_CONFIG) private routesConfig: any, private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const notifier = this.injector.get(NotificationService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      if (navigator.onLine) {
        notifier.showError('Please check your internet connection');
      }
    } else {
      // In case of client error we redirect to home view
      router.navigate([this.routesConfig.routes.home]);
    }
    // Always log errors
    LoggerService.error(error);
  }
}
