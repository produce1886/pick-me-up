import Cookies from "js-cookie";
import axios from "axios";
import { LOGIN_USER, LOGOUT_USER } from "./types";
import { State as UserState } from "../types/User";

type dataType = UserState["userData"];

export function loginUser(data: dataType) {
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
