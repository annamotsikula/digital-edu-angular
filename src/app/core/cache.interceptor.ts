import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { CacheDataService } from "./cache-data.service";

@Injectable({
    providedIn: 'root'
})
export class CacheDataInterceptor implements HttpInterceptor {
    constructor(private _service: CacheDataService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.method !== 'GET') {
            this._service.noCache();
            next.handle(req)
        }
        const cachedResponse: HttpResponse<any> | undefined = this._service.get(req.url)
        if(cachedResponse) {
            console.log('Cached response' , cachedResponse)
            return of(cachedResponse)
        }
        return next.handle(req).pipe(tap((event) => {
            if(event instanceof HttpResponse) {
                console.log('Caching from Interceptor', event)
                this._service.put(req.url, event)
            }
        }
        ))
    }
}