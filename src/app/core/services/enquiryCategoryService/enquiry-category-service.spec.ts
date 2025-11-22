import { TestBed } from '@angular/core/testing';

import { EnquiryCategoryService } from './enquiry-category-service';

describe('EnquiryCategoryService', () => {
  let service: EnquiryCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
