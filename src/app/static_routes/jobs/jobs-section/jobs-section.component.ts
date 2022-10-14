import { Component, OnInit } from '@angular/core';
import { job_entry_list } from './jobs.list';
import { JobCategoryModel } from './job-category/job-category.model';
import { JobEntryModel } from './job-category/job-entry/job-entry.model';

@Component({
  selector: 'app-jobs-section',
  templateUrl: './jobs-section.component.html',
  styleUrls: ['./jobs-section.component.css']
})
export class JobsSectionComponent implements OnInit {
  job_categories: JobCategoryModel[] = [];

  constructor() { 
    for(var category_entry of job_entry_list) {
      var entry_list: JobEntryModel[] = []; 
      for(var job_entry of category_entry.jobs_list) {
        entry_list.push(job_entry);
      }
        
      var jc = new JobCategoryModel(category_entry.category_title,
                                    category_entry.category_descr, entry_list);
      this.job_categories.push(jc);
    }
  }

  ngOnInit(): void {
  }

}
