import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeProcedureComponent } from './serve-procedure.component';

describe('ServeProcedureComponent', () => {
  let component: ServeProcedureComponent;
  let fixture: ComponentFixture<ServeProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
