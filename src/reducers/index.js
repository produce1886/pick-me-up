/*
기존 코드
import { combineReducers } from "redux"; // 여러 리듀서들을 하나로 합쳐준다.
import login from "./login";

const rootReducer = combineReducers({login,});

export default rootReducer; // used as reducer in _app.js
*/

// create your reducer
import { createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// create your reducer
const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "TICK":
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

export default reducer;
