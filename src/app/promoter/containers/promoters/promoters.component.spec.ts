import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersComponent } from './promoters.component';

describe('PromotersComponent', () => {
  let component: PromotersComponent;
  let fixture: ComponentFixture<PromotersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotersComponent]
    });
    fixture = TestBed.createComponent(PromotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
