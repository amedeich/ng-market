import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLogin from './login.reducer';

export interface MarketState {
  user: fromLogin.LoginState;
}

export const reducers: ActionReducerMap<MarketState, any> = {
  user: fromLogin.reducer,
};

export const getMarketState = createFeatureSelector<MarketState>('market');

export const getUserState = createSelector(getMarketState, (state: MarketState) => state.user);

export const getUser = createSelector(getUserState, fromLogin.getUser);
