import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private BASE_URL = '127.0.01:8000'

  constructor() { }

  getBaseAPI() {
    return this.BASE_URL
  }
}
