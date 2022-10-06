import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightRoute } from './copyright.route';

describe('CopyrightRoute', () => {
  let component: CopyrightRoute;
  let fixture: ComponentFixture<CopyrightRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
