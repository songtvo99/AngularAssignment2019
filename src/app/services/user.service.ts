import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '@models/register.model';
import { User } from '@models/user.model';
import { ServerUrl } from '@constants/url-routing.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public addUser(registerModel: RegisterModel): Observable<User> {
    const addUserUrl = ServerUrl.user.addUserUrl();
    return this.httpClient.post<any>(addUserUrl, registerModel);
  }
}
