import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { appReducer } from "./Slice";

const reducer = combineReducers({});

const store = configureStore({
    reducer,
    appReducer,
});

export default store;
