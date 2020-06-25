import { TestBed } from '@angular/core/testing';

import { AnyDataService } from './any-data.service';

describe('AnyDataService', () => {
  let service: AnyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
