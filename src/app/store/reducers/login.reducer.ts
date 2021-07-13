import * as fromLogin from '../actions/login.action';
import { IUser } from 'src/app/models/Iuser';

export interface LoginState {
  user: IUser;
  loading: boolean;
  isLoggedIn: boolean;
}

export const initialState: LoginState = {
  user: {},
  loading: false,
  isLoggedIn: false,
};

export function reducer(state = initialState, action: fromLogin.LoginActions): LoginState {
  switch (action.type) {
    case fromLogin.LOGIN_LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromLogin.LOGIN_COMPLETE: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    }

    case fromLogin.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    }

    default:
      return { ...state };
  }
}

export const getLoginLoading = (state: LoginState) => state.loading;
export const getIsLoggedIn = (state: LoginState) => state.isLoggedIn;
export const getUser = (state: LoginState) => state.user;
