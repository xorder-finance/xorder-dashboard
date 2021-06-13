import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Token} from "../../components/tools/tokens";

const initialState = {
    exchange: undefined as Token | undefined,
    receive: undefined as Token | undefined
}

export type TokenSlice = typeof initialState

export const tokensSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        setExchangeToken: (state, action: PayloadAction<Token | undefined>) => {
            state.exchange = action.payload
        },
        setReceiveToken: (state, action: PayloadAction<Token | undefined>) => {
            state.receive = action.payload
        },
    },
});

export const {setExchangeToken, setReceiveToken} = tokensSlice.actions;