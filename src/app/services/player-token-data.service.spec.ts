import { TestBed } from '@angular/core/testing';

import { PlayerTokenDataService } from './player-token-data.service';

describe('PlayerTokenDataService', () => {
  let service: PlayerTokenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerTokenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
