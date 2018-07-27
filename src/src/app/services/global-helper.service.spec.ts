import { TestBed, inject } from '@angular/core/testing';

import { GlobalHelperService } from './global-helper.service';

describe('GlobalHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalHelperService]
    });
  });

  it('should be created', inject([GlobalHelperService], (service: GlobalHelperService) => {
    expect(service).toBeTruthy();
  }));
});
