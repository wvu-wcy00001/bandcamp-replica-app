import { Injectable } from '@angular/core';
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
}
