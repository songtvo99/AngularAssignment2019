import { HttpParams } from '@angular/common/http';
import { AppConstant } from '../constants/app.constant';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CommonService {
  constructor(private snackBar: MatSnackBar) {}

  public saveLocalSessionValue(key: string, value: any): boolean {
    window.sessionStorage.setItem(
      AppConstant.SESSION_STORAGE_USER_KEY,
      JSON.stringify(value)
    );
    return true;
  }

  public getLocalSessionValue(key: string) {
    const value = window.sessionStorage.getItem(key) || '';
    if (!!value) {
      return JSON.parse(value);
    }
    return null;
  }

  public removeLocalSessionValue(key: string): boolean {
    window.sessionStorage.removeItem(AppConstant.SESSION_STORAGE_TOKEN_KEY);
    return !!window.sessionStorage.getItem(
      AppConstant.SESSION_STORAGE_TOKEN_KEY
    );
  }

  public getLoginUser() {
    window.sessionStorage.getItem(AppConstant.SESSION_STORAGE_TOKEN_KEY);
  }

  // handle error
  public handleError(err) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = err.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }

    return this.showError(errorMessage);
  }

  public showError(errorMessage) {
    if (errorMessage && errorMessage !== '') {
      this.snackBar.open(errorMessage, 'Error', {
        duration: 5000
      });
    }
  }

  public mapObjectToHttpParams(data: any): HttpParams {
    const params = new HttpParams();
    Object.keys(data).forEach(key => params.set(key, data[key]));
    return params;
  }
}
