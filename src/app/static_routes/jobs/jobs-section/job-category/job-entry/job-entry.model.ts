export class JobEntryModel {
    entry_title: string;
    entry_descr: string;
    entry_job_url: string;

    constructor(entry_title: string, entry_descr: string, entry_job_url: string) {
        this.entry_title = entry_title;
        this.entry_descr = entry_descr;
        this.entry_job_url = entry_job_url;
    }
}
