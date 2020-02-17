import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor() {}

  load(): Promise<any> {
    return new Promise((resolve, reject) => {});
  }
}
