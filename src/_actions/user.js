import { LOGIN_USER, LOGOUT_USER } from "./types";
import Cookies from "js-cookie";

export function loginUser(data) {
  Cookies.set("userData", data, { expires: 0.1 });
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
