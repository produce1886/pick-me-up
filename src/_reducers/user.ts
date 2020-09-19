import { AnyAction } from "redux";
import { LOGIN_USER, LOGOUT_USER } from "../_actions/types";
import Cookies from "js-cookie";
import { State } from "../types/User";

let userData = Cookies.get("userData");

let initialState: State;

if (userData) {
  initialState = {
    isSignedIn: true,
    userData: JSON.parse(userData),
  };
} else {
  initialState = {
    isSignedIn: false,
    userData: {
      username: "",
      email: "",
      image: "",
    },
  };
}

const reducer = (state: State = initialState, action: AnyAction) => {
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