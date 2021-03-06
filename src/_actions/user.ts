import Cookies from "js-cookie";
import { LOGIN_USER, LOGOUT_USER } from "./types";
import UserState from "../types/User";

type UserDataType = UserState["userData"];

export function loginUser(data: UserDataType) {
  Cookies.set("userData", data, { expires: 0.1 });
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
