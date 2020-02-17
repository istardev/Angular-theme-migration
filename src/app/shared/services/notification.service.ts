import { Injectable, NgZone, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONFIG } from 'app/configs/app.config';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'X', { duration: this.appConfig.snackBarDuration });
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.snackBar.open(message, 'X', {
        panelClass: ['error'],
        duration: this.appConfig.snackBarDuration,
      });
    });
  }
}
