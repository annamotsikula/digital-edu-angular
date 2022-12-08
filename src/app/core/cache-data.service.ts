import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheDataService {
  private requests: any = {}
  constructor() {}

  
  get(url: string): HttpResponse<any> {
   return this.requests[url];
  }
  put(url: string, response : HttpResponse<any>): void {
    this.requests[url] = response
  }
  noCache() {
    this.requests = {}
  }

}
