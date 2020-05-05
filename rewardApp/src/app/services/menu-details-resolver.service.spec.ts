import { TestBed } from '@angular/core/testing';

import { MenuDetailsResolverService } from './menu-details-resolver.service';

describe('MenuDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuDetailsResolverService = TestBed.get(MenuDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
