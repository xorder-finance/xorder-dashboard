import {LimitOrderBuilder, Web3ProviderConnector} from '@1inch/limit-order-protocol';
import {Web3StateSlice} from "../../state/reducers/web3-reducer";
import {TokenSlice} from "../../state/reducers/token-reducer";
import {ppContractAbi} from "./abis/PPContract";
import {erc20Abi} from "./abis/ERC20";


const limitOrderAddresses = {
    1: "",
    3: "",
    4: "",
    5: "",
    42: "0x94Bc2a1C732BcAd7343B25af48385Fe76E08734f"
}

const makerAddresses = {
    1: "",
    3: "",
    4: "",
    5: "",
    42: "0xdE968842ba9aD7c9A6085e5A9Ad1Af7fEDE47535"
}


const backendAddress = ""


export const submitOrder = async (web3State: Web3StateSlice, tokenState: TokenSlice, makerAmount: string, takerAmount: string) => {

    const web3 = web3State.web3
    const contractAddress = limitOrderAddresses[web3State.netId];
    const walletAddress = web3State.web3Account;
    const makerAddress = makerAddresses[web3State.netId];
    const makerAssetAddress = tokenState.exchange.addresses[web3State.netId]
    const takerAssetAddress = tokenState.receive.addresses[web3State.netId]


// You can create and use a custom provider connector (for example: ethers)

    // @ts-ignore
    const connector = new Web3ProviderConnector(web3);

    const limitOrderBuilder = new LimitOrderBuilder(
        contractAddress,
        web3State.netId,
        connector
    );

    const limitOrderStruct = {
        makerAssetAddress,
        takerAssetAddress,
        makerAddress: makerAddress,
        makerAmount: makerAmount,
        takerAmount: takerAmount,
        predicate: '0x0',
        permit: '0x0',
        interaction: 'to_be_replaced',
    }

    const newHash = web3.utils.keccak256(JSON.stringify({...limitOrderStruct, random: Math.random()}))

    const limitOrder = limitOrderBuilder.buildLimitOrder(
        {...limitOrderStruct, interaction: newHash});

    // const limitOrderTypedData = limitOrderBuilder.buildLimitOrderTypedData(
    //     limitOrder
    // );
    // const limitOrderSignature = limitOrderBuilder.buildOrderSignature(
    //     walletAddress,
    //     limitOrderTypedData
    // );
    // const limitOrderHash = limitOrderBuilder.buildLimitOrderHash(
    //     limitOrderTypedData
    // );


    // to backend
    const makerAssetContract = new web3.eth.Contract(erc20Abi, makerAssetAddress)
    await (makerAssetContract.methods.approve(makerAddress, makerAmount)).send({from: walletAddress});

    const ppContract = new web3.eth.Contract(ppContractAbi, makerAddress);
    await ppContract.methods.createOrder(newHash, makerAssetAddress, makerAmount).send({from: walletAddress});
}
