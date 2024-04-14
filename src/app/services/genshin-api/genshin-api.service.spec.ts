import { TestBed } from '@angular/core/testing';

import { GenshinApiService } from './genshin-api.service';

describe('GenshinApiService', () => {
  let service: GenshinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
