import { Action } from '@ngrx/store';

export const LOGIN_COMPLETE = '[User] LOGIN_COMPLETE';
export const LOGIN_ERROR = '[User] LOGIN_ERROR';
export const LOGIN_LOAD = '[User] LOGIN_LOAD';
export const LOGOUT = '[User] LOGOUT'

export class LoginLoad implements Action {
  readonly type = LOGIN_LOAD;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class LoginComplete implements Action {
  readonly type = LOGIN_COMPLETE;
  constructor(public payload: any) {}
}

export class logout implements Action {
  readonly type = LOGOUT
}

export type LoginActions = LoginLoad | LoginError | LoginComplete;
