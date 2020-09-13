import { createStore } from "redux";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import reducer from "../_reducers";
import { State as UserState } from "../types/User";

const makeStore: MakeStore<UserState> = (context: Context) =>
  createStore(reducer);

export const wrapper = createWrapper<UserState>(makeStore, { debug: false });
