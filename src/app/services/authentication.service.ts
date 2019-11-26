import { ServerUrl } from '../constants/url-routing.constant';
import { AppConstant } from '../constants/app.constant';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '@services/common.service';
import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { Login } from '@models/login.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject$: BehaviorSubject<User>;

  constructor(private http: HttpClient, private commonService: CommonService) {
    const currentUser = this.commonService.getLocalSessionValue(
      AppConstant.SESSION_STORAGE_USER_KEY
    );
    this.currentUserSubject$ = new BehaviorSubject<User>(currentUser);
  }

  public logout() {
    this.commonService.removeLocalSessionValue(
      AppConstant.SESSION_STORAGE_USER_KEY
    );
    this.currentUserSubject$.next(null);
  }

  public getCurrentUser(): User {
    return this.currentUserSubject$.value;
  }

  public login(loginModel: Login): Observable<User> {
    const authenticationUrl = ServerUrl.authentication.authenticateUrl();
    return this.http.post<any>(authenticationUrl, loginModel).pipe(
      map(user => {
        this.commonService.saveLocalSessionValue(
          AppConstant.SESSION_STORAGE_USER_KEY,
          user
        );
        this.currentUserSubject$.next(user);
        return user;
      })
    );
  }
}
