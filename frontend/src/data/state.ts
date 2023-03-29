import { combineReducer } from "./combineReducer";
import { userReducer } from "./user/user.reducers";


export const initialState: AppState = {
  user: {
    userid: 0,
    first_name: '',
    last_name: '',
    email: '',
    isAdmin: false,
    isActive: false,
    isAuthenticated: false,
    isLoggedIn: false,
    roles: []
  }
};

export const reducers = combineReducer({
  user: userReducer
});

export type AppState = ReturnType<typeof reducers>;
