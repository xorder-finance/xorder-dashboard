import * as React from "react";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import Web3 from "web3";
import {update, Web3State} from "../../state/reducers/web3-reducer";
import {tokens, workingNetworkIds} from "../tools/tokens";
import {AbiItem} from "web3-utils";
import {updateOrdersList} from "../../state/reducers/orders-reducer";


const NO_METAMASK_ERROR = "NoMetamaskError";
const LOCKED_METAMASK_ERROR = "LockedMetamaskError";

const getWeb3 = async () => {
    // @ts-ignore
    const we = window.ethereum;
    if (we) {
        we.autoRefreshOnNetworkChange = false;
        try {
            await we.enable();
        } catch (e) {
            throw new Error(LOCKED_METAMASK_ERROR);
        }
        return new Web3(we);
    } else { // @ts-ignore
        if (window.web3) { // @ts-ignore
            return new Web3(window.web3);
        } else
            throw new Error(NO_METAMASK_ERROR);
    }
};

const minERC20ABI = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    // decimals
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "type": "function"
    }
] as AbiItem[];


const initWeb3 = async (dispatch: ReturnType<typeof useAppDispatch>) => {
    dispatch(update({
        web3: undefined,
        web3State: Web3State.LOADING,
        web3Account: "",
        netId: -1,
        balances: []
    }))

    try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const netId = await web3.eth.net.getId();

        console.log(workingNetworkIds)
        if (workingNetworkIds.includes(netId)) {
            let balances = [] as { name: string, balance: string }[]
            for (const token of tokens) {
                const contract = new web3.eth.Contract(minERC20ABI, token.addresses[netId]);
                const balance = await contract.methods.balanceOf(accounts[0]);
                balances = [...balances, {name: token.name, balance}]
            }
            dispatch(update({
                web3: web3,
                web3State: Web3State.CONNECTED,
                web3Account: accounts[0],
                netId,
                balances
            }))
            setTimeout(() => {
                    dispatch(updateOrdersList())
                }, 0
            )
        } else {
            dispatch(update({
                web3: web3,
                web3State: Web3State.BAD_NETWORK,
                web3Account: accounts[0],
                netId,
                balances: []
            }))
        }

        // @ts-ignore
        if (window.ethereum) {
            // @ts-ignore
            window.ethereum.on('accountsChanged', async () => {
                // const accounts = await web3.eth.getAccounts();
                // const netId = await web3.eth.net.getId();
                // dispatch(setWeb3Data({account: accounts[0], netId}))
                dispatch(update({
                    web3: undefined,
                    web3State: Web3State.REQUESTED,
                    web3Account: "",
                    netId: -1,
                    balances: []
                }))
            });
            // @ts-ignore
            window.ethereum.on('chainChanged', async () => {
                // const accounts = await web3.eth.getAccounts();
                // const netId = await web3.eth.net.getId();
                // dispatch(setWeb3Data({account: accounts[0], netId}))
                dispatch(update({
                    web3: undefined,
                    web3State: Web3State.REQUESTED,
                    web3Account: "",
                    netId: -1,
                    balances: []
                }))
            });
        }
    } catch (e) {
        if (e.message === NO_METAMASK_ERROR) {
            dispatch(update({
                web3: undefined,
                web3State: Web3State.NO_METAMASK,
                web3Account: "",
                netId: -1,
                balances: []
            }))
        } else if (e.message === LOCKED_METAMASK_ERROR) {
            dispatch(update({
                web3: undefined,
                web3State: Web3State.LOCKED,
                web3Account: "",
                netId: -1,
                balances: []
            }))
        } else {
            console.error(e);
        }
    }
};


export const Web3Provider: React.FC = ({children}) => {
    const state = useAppSelector(state => state.web3)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (state.web3State == Web3State.REQUESTED)
            initWeb3(dispatch)
    }, [state, dispatch])

    return <>
        {children}
    </>
}