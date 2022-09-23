import { TestBed } from '@angular/core/testing';

import { RequestCategoriesService } from './request-categories.service';

describe('RequestCategoriesService', () => {
  let service: RequestCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
