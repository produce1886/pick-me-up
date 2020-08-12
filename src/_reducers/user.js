import { LOGIN_USER, LOGOUT_USER } from "../_actions/types";

export const initialState = {
  isSignedIn: false,
  userData: {
    name: "",
    email: "",
    profile_pic: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return { isSignedIn: true, userData: action.payload };
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
