import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRoute } from './signup.route';

describe('SignupRoute', () => {
  let component: SignupRoute;
  let fixture: ComponentFixture<SignupRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
