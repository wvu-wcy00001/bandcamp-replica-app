import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsRoute } from './jobs.route';

describe('JobsRoute', () => {
  let component: JobsRoute;
  let fixture: ComponentFixture<JobsRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
