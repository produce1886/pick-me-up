import { AnyAction } from "redux";
import Cookies from "js-cookie";
import { LOGIN_USER, LOGOUT_USER } from "../_actions/types";
import UserState from "../types/User";

const userData = Cookies.get("userData");

let initialState: UserState;

if (userData) {
  initialState = {
    isSignedIn: true,
    userData: JSON.parse(userData),
  };
} else {
  initialState = {
    isSignedIn: false,
    userData: {
      id: null,
      username: null,
      email: null,
      image: null,
    },
  };
}

const reducer = (state: UserState = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER: {
      return { ...state, isSignedIn: true, userData: action.payload };
    }
    case LOGOUT_USER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
