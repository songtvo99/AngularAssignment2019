import { AuthenticationService } from '@services/authentication.service';
import { TestBed } from '@angular/core/testing';

import { JwtInterceptorService } from './jwt-interceptor.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

class MockAuthenticationService {}

describe('JwtInterceptorService', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptorService,
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
    const service: JwtInterceptorService = TestBed.get(JwtInterceptorService);
    expect(service).toBeTruthy();
  });
});
