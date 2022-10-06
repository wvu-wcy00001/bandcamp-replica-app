import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsRoute } from './terms.route';

describe('TermsRoute', () => {
  let component: TermsRoute;
  let fixture: ComponentFixture<TermsRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
