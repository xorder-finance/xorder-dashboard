import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    needUpdate: false
}
export const ordersSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        updateOrdersList: (state) => {
            state.needUpdate = true
        },
        ordersListUpdated: (state) => {
            state.needUpdate = false
        },
    },
});

export const {updateOrdersList, ordersListUpdated} = ordersSlice.actions;