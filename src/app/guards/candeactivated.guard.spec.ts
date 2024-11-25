import { TestBed } from '@angular/core/testing';

import { CandeactivatedGuard } from './candeactivated.guard';

describe('CandeactivatedGuard', () => {
  let guard: CandeactivatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
