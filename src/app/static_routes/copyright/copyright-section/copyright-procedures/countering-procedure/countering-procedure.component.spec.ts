import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteringProcedureComponent } from './countering-procedure.component';

describe('CounteringProcedureComponent', () => {
  let component: CounteringProcedureComponent;
  let fixture: ComponentFixture<CounteringProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounteringProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounteringProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
