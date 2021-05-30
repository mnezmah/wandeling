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
            const newState = state;
            newState.markers = [...state.markers, action.payload];
        },
        setUser: (state, action) => {
            const newState = state;
            newState.user = action.payload;
        },
    },
    extrareducers: {},
});
const { addMarker, setUser } = appSlice.actions;

const appReducer = appSlice.reducer;

export { appReducer, addMarker, setUser };
