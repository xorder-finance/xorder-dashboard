import Web3 from "web3";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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

export const networkName = (networkId: number) => {
    switch (networkId) {
        case 1:
            return "Mainnet"
        case 3:
            return "Ropsten"
        case 4:
            return "Rinkeby"
        case 5:
            return "Goerli"
        case 42:
            return "Kovan"
        default:
            return "Unknown"
    }
}

const initialState = {
    web3: undefined as Web3 | undefined,
    web3State: Web3State.UNKNOWN,
    web3Account: "",
    netId: -1,
    balances: [] as { name: string, balance: string }[]
}

export const web3Slice = createSlice({
    name: 'web3',
    initialState,
    reducers: {
        setWeb3Data: (state, action: PayloadAction<{ account: string, netId: number }>) => {
            state.web3Account = action.payload.account
            state.netId = action.payload.netId
        },
        initWeb3: (state) => {
            state.web3State = Web3State.REQUESTED
        },
        update: (state, action: PayloadAction<typeof initialState>) => {
            return action.payload
        },
    },
});

export const {initWeb3, update, setWeb3Data} = web3Slice.actions;