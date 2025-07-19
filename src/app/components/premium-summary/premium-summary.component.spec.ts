import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSummaryComponent } from './premium-summary.component';

describe('PremiumSummaryComponent', () => {
  let component: PremiumSummaryComponent;
  let fixture: ComponentFixture<PremiumSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
