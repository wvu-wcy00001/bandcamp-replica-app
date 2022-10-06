import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtmpRoute } from './ftmp.route';

describe('FtmpRoute', () => {
  let component: FtmpRoute;
  let fixture: ComponentFixture<FtmpRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtmpRoute ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtmpRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
