import { JobEntryModel } from './job-entry/job-entry.model';

export class JobCategoryModel {
    category_title: string;
    category_descr: string;
    jobs_list: JobEntryModel[];

    constructor(category_title: string, category_descr: string, jobs_list: JobEntryModel[]) {
        this.category_title = category_title;
        this.category_descr = category_descr;
        this.jobs_list = jobs_list;
    }
}
