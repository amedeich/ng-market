import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';

import * as createAccountActions from '../actions/create-account.action';
import * as loginActions from '../actions/login.action';
import * as fromServices from '../../services';
import { Observable, of } from 'rxjs';

@Injectable()
export class CreateAccountEffects {
  constructor(private actions$: Actions, private authService: fromServices.AuthService) {}

  createAccount$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(ofType(createAccountActions.CREATE_ACCOUNT_LOAD)).pipe(
      switchMap((action: createAccountActions.createAccountLoad) => {
        return this.authService.createAccount({ ...action.payload, returnSecureToken: true }).pipe(
          map(
            (newUser) =>
              new createAccountActions.updateAccount({
                user: action.payload,
                displayName: action.payload.name,
                idToken: newUser.idToken,
              })
          ),
          catchError((error) => of(new createAccountActions.createAccountError(error)))
        );
      })
    );
  });

  updateAccount$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(ofType(createAccountActions.UPDATE_ACCOUNT)).pipe(
      switchMap((action: createAccountActions.updateAccount) => {
        const { displayName, idToken, user } = action.payload;
        const { email, password } = user;
        return this.authService.updateAccount({ displayName, idToken }).pipe(
          mergeMap((_) => [
            new createAccountActions.createAccountSuccess(),
            new loginActions.LoginLoad({ email, password }),
          ]),
          catchError((error) => of(new createAccountActions.createAccountError(error)))
        );
      })
    );
  });
}
