import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Token} from "../../components/tools/tokens";

export enum Web3State {
    UNKNOWN,
    LOADING,
    CONNECTING,
    BAD_NETWORK,
    NO_METAMASK,
    CONNECTED,
    LOCKED,
    REQUESTED,
}

const initialState = {
    exchange: undefined as Token | undefined,
    receive: undefined as Token | undefined
}

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