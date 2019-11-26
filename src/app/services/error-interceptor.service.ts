import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '@services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpCodeValues } from '@constants/url-routing.constant';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error.status === HttpCodeValues.UNAUTHORIZED ||
          error.status === HttpCodeValues.FORBIDDEN
        ) {
          // auto logout if 401 response return from server
          this.authenticationService.logout();
          location.reload();
        }

        const errorMessage = error.error.message || error.statusText;
        return throwError(errorMessage);
      })
    );
  }
}
