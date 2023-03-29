import { User } from "../../../models/User";
import { UserState } from "../user.state";
import { API_URL } from "../../../env";

interface UserIsLogedInData {}
interface UserSignupData {}
interface UserLogoutData {}
interface UserData {}


const checkStatus = (response: any) => {
  if(response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}

export const getLoggedInUser = async (data: UserIsLogedInData, auth: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${auth}`
    }
  }).then(checkStatus);

  return response
}

export const signUp = async (data: UserSignupData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(checkStatus);

  return response;
}


export const logOut = async (data: UserLogoutData, auth: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${auth}`,
    }
  }).then(checkStatus);

  return response;
}

export const getUserData = async (data: UserData, auth: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${auth}`
    }
  }).then(checkStatus);

  return response;
}

