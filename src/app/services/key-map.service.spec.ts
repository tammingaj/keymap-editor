import { TestBed } from '@angular/core/testing';

import { KeyMapService } from './key-map.service';

describe('KeyMapService', () => {
  let service: KeyMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
