import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({providedIn: 'root'})
export class CommonService {

  private TOKEN_STORAGE_KEY = 'token_storage_key';

  constructor(private snackBar: MatSnackBar) { }

  public buildUrl(url): string {
    const { API_GATEWAY } = environment;
    return `${API_GATEWAY}/${url}`;
  }

  public saveLocalSessionValue(key: string, value: any): boolean {
    window.sessionStorage.setItem(this.TOKEN_STORAGE_KEY, JSON.stringify(value));
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
    window.sessionStorage.removeItem(this.TOKEN_STORAGE_KEY);
    return !!window.sessionStorage.getItem(this.TOKEN_STORAGE_KEY);
  }

  public getLoginUser() {
    window.sessionStorage.getItem(this.TOKEN_STORAGE_KEY);
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
    if ( errorMessage && errorMessage !== '' ) {
      this.snackBar.open(errorMessage, 'Error', {
        duration: 5000,
      });
    }
  }
}
