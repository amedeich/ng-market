import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

const { API_KEY, GCP_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginObj: any): Observable<any> {
    return this.http
      .post(`${GCP_URL}/accounts:signInWithPassword?key=${API_KEY}`, loginObj)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  createAccount(account: any): Observable<any> {
    return this.http
      .post(`${GCP_URL}/accounts:signUp?key=${API_KEY}`, account)
      .pipe(catchError((errResponse: any) => throwError(errResponse.error.error)));
  }

  updateAccount(account: any): Observable<any> {
    return this.http
      .post(`${GCP_URL}/accounts:update?key=${API_KEY}`, account)
      .pipe(catchError((errResponse: any) => throwError(errResponse.error.error)));
  }
}
