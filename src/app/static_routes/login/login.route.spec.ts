import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRoute } from './login.route';

describe('LoginRoute', () => {
  let component: LoginRoute;
  let fixture: ComponentFixture<LoginRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
