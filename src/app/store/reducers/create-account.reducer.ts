import * as fromCreateAccount from '../actions/create-account.action';

export interface createAccountState {
  loading: boolean;
  errMsg: String;
}

export const initialState: createAccountState = {
  loading: false,
  errMsg: '',
};

export function reducer(state = initialState, action: fromCreateAccount.createAccountActions): createAccountState {
  switch (action.type) {
    case fromCreateAccount.CREATE_ACCOUNT_LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCreateAccount.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false,
        errMsg: '',
      };
    }

    case fromCreateAccount.CREATE_ACCOUNT_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        errMsg: error.message,
      };
    }

    default:
      return { ...state };
  }
}
