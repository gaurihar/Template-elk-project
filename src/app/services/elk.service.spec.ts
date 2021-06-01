import { TestBed } from '@angular/core/testing';

import { ElkService } from './elk.service';

describe('ElkService', () => {
  let service: ElkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
