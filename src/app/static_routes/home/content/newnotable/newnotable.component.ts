import { Component, OnInit } from '@angular/core';
import { newnotable_entry_list } from './newnotable.list';
import { NewNotableCardModel } from './nncard/nncard.model';

@Component({
  selector: 'app-content-nn',
  templateUrl: './newnotable.component.html',
  styleUrls: ['./newnotable.component.css']
})
export class NewnotableComponent implements OnInit {
  cards: NewNotableCardModel[] = [];
  
  constructor() {
    for(var newnotable_entry of newnotable_entry_list) {
      var card = newnotable_entry;
      this.cards.push(card);
    }
  }
  ngOnInit(): void {
  }

}
