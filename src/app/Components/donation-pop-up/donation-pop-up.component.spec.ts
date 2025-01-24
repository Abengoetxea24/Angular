import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPopUpComponent } from './donation-pop-up.component';

describe('DonationPopUpComponent', () => {
  let component: DonationPopUpComponent;
  let fixture: ComponentFixture<DonationPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationPopUpComponent]
    });
    fixture = TestBed.createComponent(DonationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
