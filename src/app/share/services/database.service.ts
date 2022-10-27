import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
  }

  getEntriesHandle<T>(url: string) {
    return this.http.get<T>(url);
  }
}
