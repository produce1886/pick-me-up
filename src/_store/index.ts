import { createStore } from "redux";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../_reducers";
import UserState from "../types/User";

const makeStore: MakeStore<UserState> = () =>
  createStore(
    reducer,
    composeWithDevTools()
    // applyMiddleware(...middleware)
    // other store enhancers if any
  );

// eslint-disable-next-line import/prefer-default-export
export const wrapper = createWrapper<UserState>(makeStore, { debug: false });
