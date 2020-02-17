import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * logs the message to console
   * @param msg
   */
  static log(msg: string): void {
    console.log(msg);
  }

  /**
   * This stringifies the whole error object and log to console
   * @param error
   */
  static error(error: any): void {
    console.error(JSON.stringify(error));
  }
}
