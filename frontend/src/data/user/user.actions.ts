import React from "react";
import { getLoggedInUser, signUp, logOut, getUserData } from "./api/userApi"
import { ActionType } from "../../util/types";
import { UserState } from "./user.state";


interface UserData {}
interface ErrorResponse { }
interface LogoutUserOutData {}
interface UserLogoutData {}
interface UserLoginData { }
interface UserSignUpData { }



export const setLoading = (isLoading: boolean) => ({
  type: 'set-user-loading', isLoading} as const
);

export const setData = (data: Partial<UserState>) => ({
  type: 'set-user-data', data} as const
);

export const setIsLoggedInErrorData = (err: unknown | string) => ({
    type: 'set-user-is-logged-in-error-data',
    err
 } as const);

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  return ({
    type: 'set-is-loggedin',
    loggedIn,
  } as const);
};

export const setIsLogoutOut = (loggedOut: boolean) => async (dispatch: React.Dispatch<any>) => {
  return ({
    type: 'set-is-loggedout',
    loggedOut,
  } as const);
};

export const setIsLogoutOutErrorData = (err: unknown | string) => ({
  type: 'set-user-is-logged-out-error-data',
  err
} as const);

export const setSignUpErrorData = (err: unknown | string) => ({
  type: 'set-sign-up-error-data',
  err
} as const);

export const setUsername = (username?: string | undefined) => async (dispatch: React.Dispatch<any>) => {
  return ({
    type: 'set-username',
    username
  } as const);
};



export const loadUserData = (data: UserData, auth: string) => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const responseData = await getUserData(data, auth);
  dispatch(setData(responseData));
  dispatch(setLoading(false));
}

export const logoutUser = (data: UserLogoutData, auth: string) => async (dispatch: React.Dispatch<any>) => {
  try{
      const responseData = await logOut(data, auth);
      await dispatch(setIsLogoutOut(responseData.data));
  }catch(err) {
    await dispatch(setIsLoggedInErrorData(err));
  }
  dispatch(setUsername());
}

export const logInUser = (data: UserLoginData, auth: string) => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const responseData = await getLoggedInUser(data, auth);
    dispatch(setIsLoggedIn(responseData.data));
    dispatch(loadUserData(responseData.data, auth));
  }catch(err) {
    await dispatch(setIsLogoutOutErrorData(err))
    dispatch(setLoading(false));
  }
  dispatch(setLoading(false));
}

export const signUpUser = (data: UserSignUpData) => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    await signUp(data);
  }catch(err) {
    dispatch(setSignUpErrorData(err));
    dispatch(setLoading(false));
  }
  dispatch(setLoading(false));
}

export const loadCurrentUserData = () => async(dispatch: React.Dispatch<any>) => {
  return null;
}

export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setIsLoggedIn>
  | ActionType<typeof setIsLogoutOut>
  | ActionType<typeof setIsLogoutOutErrorData>
  | ActionType<typeof setSignUpErrorData>
  | ActionType<typeof setUsername>
  | ActionType<typeof setIsLoggedInErrorData>


