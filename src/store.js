import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "./reducers";

const middlewares = applyMiddleware(promise, ReduxPromise, ReduxThunk);

const initialState = {}

const store = createStore(reducers, initialState, middlewares);
export default store;
