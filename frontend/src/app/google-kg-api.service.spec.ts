import { TestBed } from '@angular/core/testing';

import { GoogleKgApiService } from './google-kg-api.service';

describe('GoogleKgApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleKgApiService = TestBed.get(GoogleKgApiService);
    expect(service).toBeTruthy();
  });
});
