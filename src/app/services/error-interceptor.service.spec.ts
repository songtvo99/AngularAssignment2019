import { AuthenticationService } from '@services/authentication.service';
import { TestBed } from '@angular/core/testing';

import { ErrorInterceptorService } from './error-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

class MockAuthenticationService {}

describe('ErrorInterceptorService', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptorService,
          multi: true
        },
        {
          provide: AuthenticationService,
          useClass: MockAuthenticationService
        }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const mockAuthenticationService = TestBed.get(AuthenticationService);
    const service: ErrorInterceptorService = new ErrorInterceptorService(
      mockAuthenticationService
    );
    expect(service).toBeDefined();
  });
});
