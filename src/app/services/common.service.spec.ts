import { MatSnackBar } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

class MockMatSnackBar {}

describe('CommonService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar, useClass: MockMatSnackBar }]
    })
  );

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });
});
