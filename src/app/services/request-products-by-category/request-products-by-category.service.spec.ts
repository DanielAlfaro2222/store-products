import { TestBed } from '@angular/core/testing';

import { RequestProductsByCategoryService } from './request-products-by-category.service';

describe('RequestProductsByCategoryService', () => {
  let service: RequestProductsByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProductsByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
