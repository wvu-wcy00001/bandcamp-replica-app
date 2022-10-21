import { LivestreamCardModel } from './lscard/lscard.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-ls',
  templateUrl: './livestreams.component.html',
  styleUrls: ['./livestreams.component.css']
})
export class LivestreamsComponent implements OnInit {
  cards: LivestreamCardModel[] | undefined;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getStreamsInfo() {
    var getreq = this.http.get<LivestreamCardModel[]>('https://bandcamp-replica-app-default-rtdb.firebaseio.com/livestreams/.json');
    getreq.subscribe((data: LivestreamCardModel[]) => {
        console.log(data);
        this.cards = data;
    });
  }

  ngOnInit(): void {
    this.getStreamsInfo();
  }

}
