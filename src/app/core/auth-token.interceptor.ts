import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TOKEN_KEY } from "./constants";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private _storage: LocalStorageService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Request Created in Client side  ',req)
        if(this._storage.itemExists(TOKEN_KEY)) {
            const token = this._storage.getLocalItem(TOKEN_KEY)
            const clonedRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
            return next.handle(clonedRequest)
        }
        return next.handle(req)
    }
}