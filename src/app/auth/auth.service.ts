import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl, TOKEN_KEY } from '../core/constants';
import { LocalStorageService } from '../core/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _localSt: LocalStorageService) { }

  authUser(data: { email: string, pwd: string }): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json')
    const body = {
      username: data.email,
      password: data.pwd
    }
   return this._http.post(`${baseUrl}/auth/login`, body, {headers: headers} ).pipe(
    tap((result: any) => {
      // console.log(result)
      this._localSt.setLocalItem(TOKEN_KEY, result.token)
    })
   )
  }

  isAuthorized() {
   return this._localSt.itemExists(TOKEN_KEY)

  }
  logOut() {
    this._localSt.removeItem(TOKEN_KEY);
  }
}
