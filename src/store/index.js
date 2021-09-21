import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { userReducer, postsReducer, postReducer } from "./reducers";

const rootReducer = combineReducers({ userReducer, postsReducer, postReducer });

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
