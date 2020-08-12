import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../_reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const middlewares = [];
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

// create a makeStore function
const makeStore = (context) => createStore(reducer, enhancer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
