import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LscardComponent } from './lscard.component';

describe('LscardComponent', () => {
  let component: LscardComponent;
  let fixture: ComponentFixture<LscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
