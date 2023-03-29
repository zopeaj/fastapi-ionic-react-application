import { UserActions } from "./user.actions";
import { UserState } from "./user.state";

export function userReducer(state: UserState, action: UserActions): UserState {
  switch (action.type) {
    case 'set-user-loading':
      return {...state, loading: action.isLoading}
    case 'set-user-data':
      return {...state, ...action.data};
    case 'set-username':
      return {...state, username: action.username};
    case 'set-is-loggedin':
      return {...state, loggedIn: action.loggedIn };
    case 'set-is-loggedout':
      return {...state, loggedOut: action.loggedOut };
    case 'set-user-is-logged-in-error-data':
      return {...state, loggedInErrorData: action.err};
    case 'set-user-is-logged-out-error-data':
      return {...state, loggedOutErrorData: action.err};
    case 'set-sign-up-error-data':
      return {...state, signUpdErrorData: action.err};
  };

}

