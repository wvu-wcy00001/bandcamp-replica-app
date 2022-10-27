import { LivestreamCardModel } from './lscard/lscard.model';
import { DatabaseService } from 'src/app/share/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-ls',
  templateUrl: './livestreams.component.html',
  styleUrls: ['./livestreams.component.css']
})
export class LivestreamsComponent implements OnInit {
  cards: LivestreamCardModel[] | undefined;
  db: DatabaseService;

  constructor(db: DatabaseService) {
    this.db = db;
  }

  getStreamEntries() {
    let handle = this.db.getEntriesHandle<LivestreamCardModel[]>('https://bandcamp-replica-app-default-rtdb.firebaseio.com/livestreams.json');
    handle.subscribe((data: LivestreamCardModel[]) => {
        this.cards = data;
      }
    );
  }

  ngOnInit(): void {
    this.getStreamEntries();
  }

}
