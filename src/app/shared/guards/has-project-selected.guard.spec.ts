import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasProjectSelectedGuard } from './has-project-selected.guard';

describe('hasProjectSelectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasProjectSelectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
