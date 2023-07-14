import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyValuePickerComponent } from './money-value-picker.component';

describe('VipValuePickerComponent', () => {
  let component: MoneyValuePickerComponent;
  let fixture: ComponentFixture<MoneyValuePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyValuePickerComponent]
    });
    fixture = TestBed.createComponent(MoneyValuePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
