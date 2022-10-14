import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-entry',
  templateUrl: './job-entry.component.html',
  styleUrls: ['./job-entry.component.css']
})
export class JobEntryComponent implements OnInit {
  @Input() entry_title: string;
  @Input() entry_descr: string;
  @Input() entry_job_url: string;

  constructor() {
    this.entry_title = "";
    this.entry_descr = "";
    this.entry_job_url = "";
  }

  ngOnInit(): void {
  }

}
