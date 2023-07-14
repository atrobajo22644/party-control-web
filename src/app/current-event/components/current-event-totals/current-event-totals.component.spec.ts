import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEventTotalsComponent } from './current-event-totals.component';

describe('CurrentEventTotalsComponent', () => {
  let component: CurrentEventTotalsComponent;
  let fixture: ComponentFixture<CurrentEventTotalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentEventTotalsComponent]
    });
    fixture = TestBed.createComponent(CurrentEventTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
