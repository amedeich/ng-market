import { Action } from '@ngrx/store';

export const CREATE_ACCOUNT_SUCCESS = '[User] CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_ERROR = '[User] CREATE_ACCOUNT_ERROR';
export const CREATE_ACCOUNT_LOAD = '[User] CREATE_ACCOUNT_LOAD';

export const UPDATE_ACCOUNT = '[User] UPDATE_ACCOUNT_SUCCESS'
export const UPDATE_ACCOUNT_ERROR = '[User] UPDATE_ACCOUNT_ERROR'

export class createAccountLoad implements Action {
  readonly type = CREATE_ACCOUNT_LOAD;
  constructor(public payload: any) {}
}

export class createAccountError implements Action {
  readonly type = CREATE_ACCOUNT_ERROR;
  constructor(public payload: any) {}
}

export class updateAccount implements Action {
  readonly type = UPDATE_ACCOUNT
  constructor(public payload: any) {}
}

export class updateAccountError implements Action {
  readonly type = UPDATE_ACCOUNT_ERROR
  constructor(public payload: any) {}
}

export class createAccountSuccess implements Action {
  readonly type = CREATE_ACCOUNT_SUCCESS;
}

export type createAccountActions = createAccountLoad | createAccountError | createAccountSuccess;
