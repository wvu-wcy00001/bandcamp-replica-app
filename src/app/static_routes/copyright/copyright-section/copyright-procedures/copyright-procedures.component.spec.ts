import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightProceduresComponent } from './copyright-procedures.component';

describe('CopyrightProceduresComponent', () => {
  let component: CopyrightProceduresComponent;
  let fixture: ComponentFixture<CopyrightProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightProceduresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
