import { Component, OnInit, Input } from '@angular/core';
import { JobEntryModel } from './job-entry/job-entry.model'

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.css']
})
export class JobCategoryComponent implements OnInit {
  @Input() category_title: string;
  @Input() category_descr: string;
  @Input() jobs_list: JobEntryModel[];

  constructor() {
    this.category_title = "";
    this.category_descr = "";
    this.jobs_list = [
        new JobEntryModel("", "", "")
    ]
  }

  ngOnInit(): void {
  }

}
