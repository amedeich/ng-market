import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as fromLogin from './login.reducer';
import * as fromCreateAccount from './create-account.reducer'

export interface MarketState {
  user: fromLogin.LoginState;
  createAccount: fromCreateAccount.createAccountState
}

export const reducers: ActionReducerMap<MarketState, any> = {
  user: fromLogin.reducer,
  createAccount: fromCreateAccount.reducer
};

export function clearState(reducer: any) {
  return function (state: any, action: any) {
    return reducer(action.type === '[User] LOGOUT' ? undefined : state, action);
  }
}

export const getMarketState = createFeatureSelector<MarketState>('market');

export const getUserState = createSelector(getMarketState, (state: MarketState) => state.user);

export const getCreateUserState = createSelector(getMarketState, (state: MarketState) => state.createAccount)

export const getUser = createSelector(getUserState, fromLogin.getUser);
