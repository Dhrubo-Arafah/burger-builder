import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

export const store=createStore(Reducer, applyMiddleware(thunk, logger))