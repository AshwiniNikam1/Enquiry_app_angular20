import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEnquiryForm } from './submit-enquiry-form';

describe('SubmitEnquiryForm', () => {
  let component: SubmitEnquiryForm;
  let fixture: ComponentFixture<SubmitEnquiryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitEnquiryForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitEnquiryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
