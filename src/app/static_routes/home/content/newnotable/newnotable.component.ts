import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/share/services/database.service';
import { NewNotableCardModel } from './nncard/nncard.model';

@Component({
  selector: 'app-content-nn',
  templateUrl: './newnotable.component.html',
  styleUrls: ['./newnotable.component.css']
})
export class NewnotableComponent implements OnInit {
  db: DatabaseService;
  cards: NewNotableCardModel[] | undefined;
  
  constructor(db: DatabaseService) {
    this.db = db;
  }

  getNewNotableEntries() {
    let handle = this.db.getEntriesHandle<NewNotableCardModel>('newnotable');
    handle.subscribe((data: NewNotableCardModel[]) => {
        this.cards = data;
      }
    );
  }

  ngOnInit(): void {
      this.getNewNotableEntries();
  }

}
