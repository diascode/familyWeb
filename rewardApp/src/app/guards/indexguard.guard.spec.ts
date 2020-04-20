import { TestBed, async, inject } from '@angular/core/testing';

import { IndexguardGuard } from './indexguard.guard';

describe('IndexguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexguardGuard]
    });
  });

  it('should ...', inject([IndexguardGuard], (guard: IndexguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
