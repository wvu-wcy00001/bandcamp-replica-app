import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-nncard',
  templateUrl: './nncard.component.html',
  styleUrls: ['./nncard.component.css']
})
export class NncardComponent implements OnInit {
  @Input() albuminfo_url: string;
  @Input() albumart_url: string;
  @Input() albumname: string;
  @Input() albumartist: string;
  @Input() albumgenre: string;
  @Input() albumdescr: string;
  
  constructor() {
    this.albuminfo_url = "";
    this.albumart_url = "";
    this.albumname = "Album name not available";
    this.albumartist = "Artist not available";
    this.albumgenre = "";
    this.albumdescr = "";
  }

  ngOnInit(): void {
  }

}
