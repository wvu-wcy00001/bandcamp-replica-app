import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEntryComponent } from './job-entry.component';

describe('JobEntryComponent', () => {
  let component: JobEntryComponent;
  let fixture: ComponentFixture<JobEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
