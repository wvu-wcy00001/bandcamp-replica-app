import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyRoute } from './privacy.route';

describe('PrivacyRoute', () => {
  let component: PrivacyRoute;
  let fixture: ComponentFixture<PrivacyRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
