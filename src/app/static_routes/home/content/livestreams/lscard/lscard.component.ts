import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-lscard',
  templateUrl: './lscard.component.html',
  styleUrls: ['./lscard.component.css']
})
export class LscardComponent implements OnInit {
  @Input() stream_url: string;
  @Input() streamtitle: string;
  @Input() streamartist: string;
  @Input() streamdate: string;
  @Input() streamtime: string;

  constructor() {
    this.stream_url = "";
    this.streamtitle = "User";
    this.streamartist = "Artist";
    this.streamdate = "Date";
    this.streamtime = "Time";
  }

  ngOnInit(): void {
  }

}
