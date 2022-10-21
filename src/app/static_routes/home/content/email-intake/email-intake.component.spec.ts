import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIntakeComponent } from './email-intake.component';

describe('EmailIntakeComponent', () => {
  let component: EmailIntakeComponent;
  let fixture: ComponentFixture<EmailIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailIntakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
