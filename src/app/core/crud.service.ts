import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'}) 


export class CrudService {
    constructor(private _http: HttpClient) {
    }

    // getPosts(): Observable<IPost[]> {
    //   return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    // }
}



interface IPost {
    userId: number,
    id: number,
    title: string
    body: string
    }