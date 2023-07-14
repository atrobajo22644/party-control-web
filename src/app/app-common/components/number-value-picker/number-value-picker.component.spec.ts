import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberValuePickerComponent } from './number-value-picker.component';

describe('NumberValuePickerComponent', () => {
  let component: NumberValuePickerComponent;
  let fixture: ComponentFixture<NumberValuePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberValuePickerComponent]
    });
    fixture = TestBed.createComponent(NumberValuePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
