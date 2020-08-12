import { LOGIN_USER, LOGOUT_USER } from "../_actions/types";
import Cookies from "js-cookie";

let userData = Cookies.get("userData");

let initialState;
if (userData) {
  initialState = {
    isSignedIn: true,
    userData: JSON.parse(userData),
  };
} else {
  initialState = {
    isSignedIn: false,
    userData: {
      name: "",
      email: "",
      profilePic: "",
    },
  };
}

const reducer = (state = initialState, action) => {
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
