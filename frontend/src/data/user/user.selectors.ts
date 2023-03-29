import { createSelector } from 'reselect';
import { User } from "../../models/User";
import { AppState } from "../state";

const getUser = (state: AppState) => {
  return state.user;
}

const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id'];
}

export const getUserRoles = createSelector(getUser, (user) => {
  return user.roles;
});

export const getUserIsAdmin = createSelector(getUser, (user) => {
  return user.isAdmin;
});

export const getUserIsAuthenticated = createSelector(getUser, (user) => {
  return user.isAuthenticated;
});

export const getUserIsActive = createSelector(getUser, (user) => {
  return user.isActive;
});

export const getUserIsLoggedIn = createSelector(getUser, (user) => {
  return user.isLoggedIn;
});

export const getUserId = createSelector(getUser, getIdParam, (user, id) => {
  return user.id === id;
});
