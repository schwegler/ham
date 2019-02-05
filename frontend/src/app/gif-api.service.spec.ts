import { TestBed } from '@angular/core/testing';

import { GifApiService } from './gif-api.service';

describe('GifApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifApiService = TestBed.get(GifApiService);
    expect(service).toBeTruthy();
  });
});
