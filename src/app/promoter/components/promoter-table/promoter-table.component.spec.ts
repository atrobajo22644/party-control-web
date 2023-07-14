import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterTableComponent } from './promoter-table.component';

describe('PromoterTableComponent', () => {
  let component: PromoterTableComponent;
  let fixture: ComponentFixture<PromoterTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoterTableComponent]
    });
    fixture = TestBed.createComponent(PromoterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
