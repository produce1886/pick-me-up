import { LOGIN_USER, LOGOUT_USER } from "./types";

export function loginUser(data) {
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function logoutUser(userData) {
  return {
    type: LOGOUT_USER,
  };
}
