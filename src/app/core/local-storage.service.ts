import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _storage = localStorage
  constructor() { }

  getLocalItem(data: string ): any | undefined {
    return this._storage.getItem(data) || undefined
  }

  setLocalItem(key: string, value: any) {
    this._storage.setItem(key, JSON.stringify(value))
  }

  clearAll() {
    this._storage.clear()
  }

  itemExists(key: string): boolean {
    return !!this._storage.getItem(key)
  }

  removeItem(key: string) {
    this._storage.removeItem(key)
  }


}
