import { LOGIN_USER, LOGOUT_USER } from "./types";
import Cookies from "js-cookie";
import axios from "axios";

export function loginUser(data) {
  Cookies.set("userData", data, { expires: 0.1 });
  axios.post(`${process.env.API_HOST}/login`, data);

  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function logoutUser() {
  Cookies.remove("userData", { path: "" });
  return {
    type: LOGOUT_USER,
  };
}
