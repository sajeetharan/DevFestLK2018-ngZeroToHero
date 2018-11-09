import { TestBed } from '@angular/core/testing';

import { CoinsService } from './coins.service';

describe('CoinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinsService = TestBed.get(CoinsService);
    expect(service).toBeTruthy();
  });
});
