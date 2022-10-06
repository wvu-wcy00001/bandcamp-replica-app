import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoidComponent } from './factoid.component';

describe('FactoidComponent', () => {
  let component: FactoidComponent;
  let fixture: ComponentFixture<FactoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
