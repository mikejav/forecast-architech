import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureAvgComponent } from './pressure-avg.component';

describe('PressureAvgComponent', () => {
  let component: PressureAvgComponent;
  let fixture: ComponentFixture<PressureAvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureAvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureAvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
