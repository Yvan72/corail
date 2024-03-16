import { TestBed } from '@angular/core/testing';

import { PageDeGardeService } from './page-de-garde.service';

describe('PageDeGardeService', () => {
  let service: PageDeGardeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDeGardeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
