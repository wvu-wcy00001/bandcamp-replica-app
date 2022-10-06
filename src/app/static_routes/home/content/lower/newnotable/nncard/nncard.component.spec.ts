import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NncardComponent } from './nncard.component';

describe('NncardComponent', () => {
  let component: NncardComponent;
  let fixture: ComponentFixture<NncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
