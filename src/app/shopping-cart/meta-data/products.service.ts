import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concatMap, filter, map, Observable, tap } from "rxjs";
import { baseUrl } from "src/app/core/constants";
import { IAddProduct, IDeletedProduct, IProduct, IProductBaseReponse } from "./product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private _http: HttpClient) {
    }
    getProductList(): Observable<IProduct[]> {
      return this._http.get<IProductBaseReponse>(`${baseUrl}/products`).pipe(
        tap(result => console.log('First response from observable', result)),
        map(data => data.products)
      )
    }

    getSingleProduct(id: number): Observable<IProduct>{
      return this._http.get<IProduct>(`${baseUrl}/products/${id}`)
    }

    searchForData(searchQuery: string): Observable<IProduct[]> {
      return this._http.get<IProductBaseReponse>(`${baseUrl}/products/search`, { 
        params: { q: searchQuery }
      }).pipe(map(data => data.products))
      
    }
    addProduct(title: string): Observable<IProduct> {
      return this._http.post<IProduct>(`${baseUrl}/products/add` , { title: title}).pipe(tap(
        response => console.log(response)
      ))
    }

    deleteProduct(id: number): Observable<boolean> {
      return this._http.delete<IDeletedProduct>(`${baseUrl}/products/${id}`).pipe(
        map(data => data.isDeleted),
        tap(result => console.log(result))
      )
    }
}