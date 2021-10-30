import { TestBed } from '@angular/core/testing';

import { ZmkConfigGeneratorService } from './zmk-config-generator.service';

describe('ZmkConfigGeneratorService', () => {
  let service: ZmkConfigGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZmkConfigGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
