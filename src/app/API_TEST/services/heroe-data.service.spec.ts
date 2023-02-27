import { TestBed } from '@angular/core/testing';

import { HeroeDataService } from './heroe-data.service';

describe('HeroeDataService', () => {
  let service: HeroeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
