import { Injectable } from '@angular/core';

import { CommonService } from '@services/common.service';
import { User } from '@app/models/user.model';
import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { exhaustMap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService) { }

  public get loginUrl(): string {
    return this.commonService.buildUrl('users.json');
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.loginUrl, { email, password })
      .pipe(
        exhaustMap(response => response.body),
        retry(3),
        catchError(err => this.commonService.handleError)
      );
  }


}
