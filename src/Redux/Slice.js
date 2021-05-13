import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    markers: [],
};

const appSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        addMarker: (state, action) => {
            console.log(action.payload);
            const newState = state;
            newState.markers = [...state.markers, action.payload];
        },
    },
    extrareducers: {},
});
const { addMarker } = appSlice.actions;

const appReducer = appSlice.reducer;

export { appReducer, addMarker };
