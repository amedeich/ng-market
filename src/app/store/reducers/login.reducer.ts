import * as fromLogin from '../actions/login.action';
import { IUser } from 'src/app/models/Iuser';

export interface LoginState {
  user: IUser;
  loading: boolean;
  isLoggedIn: boolean;
  errMsg: String;
}

export const initialState: LoginState = {
  user: {},
  loading: false,
  isLoggedIn: false,
  errMsg: '',
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
      const userResponse = action.payload;
      localStorage.setItem('market_data', JSON.stringify(userResponse));
      return {
        ...state,
        user: {
          id: userResponse.idToken,
          name: userResponse.displayName,
          session: {
            token: userResponse.idToken,
          },
        },
        loading: false,
        isLoggedIn: true,
        errMsg: '',
      };
    }

    case fromLogin.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        errMsg: 'No se puede autenticar al usuario, intente de nuevo.',
      };
    }

    default:
      return { ...state };
  }
}

export const getLoginLoading = (state: LoginState) => state.loading;
export const getIsLoggedIn = (state: LoginState) => state.isLoggedIn;
export const getUser = (state: LoginState) => state.user;
