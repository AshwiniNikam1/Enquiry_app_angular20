import { TestBed } from '@angular/core/testing';

import { EnquiryStatusService } from './enquiry-status-service';

describe('EnquiryStatusService', () => {
  let service: EnquiryStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
