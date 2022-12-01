import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoute } from './admin.route';

describe('AdminRoute', () => {
  let component: AdminRoute;
  let fixture: ComponentFixture<AdminRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
