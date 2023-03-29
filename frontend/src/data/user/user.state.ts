export interface LoggedInErrorData {
  alreadyLoggedIn: string;
}

export interface LoggedOutErrorData {
  loggedOut: string;
}

export interface SignUpErrorData {
  usernameAlreadyExist: string;
}

export interface UserState {
  userid: number;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  isAuthenticated: boolean;
  loading: boolean;
  username: string | undefined;
  loggedIn: boolean;
  loggedOut: boolean;
  loggedInErrorData: string | unknown;
  loggedOutErrorData: string | unknown;
  signUpdErrorData: string | unknown;
};



