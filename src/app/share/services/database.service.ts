import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  dbclient: AngularFireDatabase;
  
  constructor(dbclient: AngularFireDatabase) {
    this.dbclient = dbclient;
  }

  getEntriesHandle<T>(a: string) {
    return this.dbclient.list<T>(a).valueChanges();
  }

  addEntries<T>(a: string, list: T[]) {
    for (var object of list) {
      this.dbclient.list<T>(a).push(object);
    }
  }
}

