import { HttpClient } from '@angular/common/http';
import { CommonService } from '@services/common.service';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

class MockCommonService {
  public getLocalSessionValue(key: string) {
    return {};
  }
}

class MockHttpClient {}

describe('AuthenticationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: CommonService, useClass: MockCommonService },
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    })
  );

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
