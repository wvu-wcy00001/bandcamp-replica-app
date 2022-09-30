import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnotableComponent } from './newnotable.component';

describe('NewnotableComponent', () => {
  let component: NewnotableComponent;
  let fixture: ComponentFixture<NewnotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewnotableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewnotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
