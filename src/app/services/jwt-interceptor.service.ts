import { Observable } from 'rxjs';
import { AuthenticationService } from '@services/authentication.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.getCurrentUser();
    if (currentUser && currentUser.token) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          'X-AUTH-TOKEN': `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(httpRequest);
  }
}
