import { TestBed } from '@angular/core/testing';

import { DadosexercService } from './dadosexerc.service';

describe('DadosexercService', () => {
  let service: DadosexercService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosexercService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
