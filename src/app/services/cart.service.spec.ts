import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '@services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { UserService } from './user.service';

class MockAuthenticatedService {}

class MockUserService {}

class MockHttpClient {}

class MockSnackBar {}

describe('CartService', () => {
  beforeEach(async () =>
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: AuthenticationService, useClass: MockAuthenticatedService },
        { provide: MatSnackBar, useClass: MockSnackBar }
      ]
    })
  );

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeDefined();
  });
});
