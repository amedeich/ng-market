import { Action } from '@ngrx/store';
import { IUser } from 'src/app/models/Iuser';

export const LOGIN_COMPLETE = '[User] LOGIN_COMPLETE';
export const LOGIN_ERROR = '[User] LOGIN_ERROR';
export const LOGIN_LOAD = '[User] LOGIN_LOAD';

export class LoginLoad implements Action {
  readonly type = LOGIN_LOAD;
}

export class LoginError implements Action {
  readonly type = LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class LoginComplete implements Action {
  readonly type = LOGIN_COMPLETE;
  constructor(public payload: IUser) {}
}

export type LoginActions = LoginLoad | LoginError | LoginComplete;
