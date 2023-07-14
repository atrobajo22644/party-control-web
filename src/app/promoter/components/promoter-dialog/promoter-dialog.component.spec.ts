import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterDialogComponent } from './promoter-dialog.component';

describe('PromoterDialogComponent', () => {
  let component: PromoterDialogComponent;
  let fixture: ComponentFixture<PromoterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoterDialogComponent]
    });
    fixture = TestBed.createComponent(PromoterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
