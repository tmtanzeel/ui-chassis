import { TestBed } from '@angular/core/testing';

import { BlackDuckLibService } from './black-duck-lib.service';

describe('BlackDuckLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlackDuckLibService = TestBed.get(BlackDuckLibService);
    expect(service).toBeTruthy();
  });
});
