import { Component, OnInit } from '@angular/core';
import { mock_newnotable_entry_list } from './newnotable_list';
import { CardModel } from './newnotable.model';

@Component({
  selector: 'app-content-nn',
  templateUrl: './newnotable.component.html',
  styleUrls: ['./newnotable.component.css']
})
export class NewnotableComponent implements OnInit {
  cards: CardModel [] = [];
  
  constructor() {
    for(var newnotable_entry of mock_newnotable_entry_list) {
      var card = new CardModel(newnotable_entry.albuminfo_url, newnotable_entry.albumart_url,
                                    newnotable_entry.albumname, newnotable_entry.albumartist,
                                    newnotable_entry.albumgenre, newnotable_entry.albumdescr);
      this.cards.push(card);
      console.log(card);
    }
  }
  ngOnInit(): void {
  }

}
