import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "./reducers";
import Logger from "./logger";

const middlewares = applyMiddleware(promise, ReduxPromise, ReduxThunk, Logger);

const initialState = {};

const store = createStore(reducers, initialState, middlewares);
export default store;
