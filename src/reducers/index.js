import { combineReducers } from "redux"; // 여러 리듀서들을 하나로 합쳐준다.
import login from "./login";

const rootReducer = combineReducers({
  login,
});

export default rootReducer; // used ad reducer in _app.js
