import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
};

const appSlice = createSlice({
    name: "root",
    initialState,
    reducers: {},
    extrareducers: {},
});

const appReducer = appSlice.reducer;

export { appReducer };
