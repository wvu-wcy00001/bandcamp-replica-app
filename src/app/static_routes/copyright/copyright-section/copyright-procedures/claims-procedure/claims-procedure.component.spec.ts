import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsProcedureComponent } from './claims-procedure.component';

describe('ClaimsProcedureComponent', () => {
  let component: ClaimsProcedureComponent;
  let fixture: ComponentFixture<ClaimsProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
