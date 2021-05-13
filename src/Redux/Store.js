import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { appReducer } from "./Slice";
console.log(appReducer);

const reducer = combineReducers({ customMap: appReducer });

const store = configureStore({
    reducer,
});

export default store;
