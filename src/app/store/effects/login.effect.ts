import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import * as loginActions from '../actions/login.action';
import * as fromServices from '../../services';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private loginService: fromServices.AuthService, private router: Router) {}

  login$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(ofType(loginActions.LOGIN_LOAD)).pipe(
      switchMap((action: loginActions.LoginLoad) => {
        return this.loginService.login({ ...action.payload, returnSecureToken: true }).pipe(
          map((user) => new loginActions.LoginComplete(user)),
          tap(() => this.router.navigate(['/products'])),
          catchError((error) => of(new loginActions.LoginError(error)))
        );
      })
    );
  });

  logout$ = createEffect(
    (): Observable<any> => {
      return this.actions$.pipe(ofType(loginActions.LOGOUT)).pipe(
        tap(() => {
          localStorage.clear();
          this.router.navigate(['/products']);
        })
      );
    },
    { dispatch: false }
  );
}
