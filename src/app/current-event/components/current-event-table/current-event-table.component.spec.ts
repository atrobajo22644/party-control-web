import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEventTableComponent } from './current-event-table.component';

describe('CurrentEventTableComponent', () => {
  let component: CurrentEventTableComponent;
  let fixture: ComponentFixture<CurrentEventTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentEventTableComponent]
    });
    fixture = TestBed.createComponent(CurrentEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
