import {LimitOrderBuilder, Web3ProviderConnector} from '@1inch/limit-order-protocol';
import Web3 from "web3";


const do1inch = (web3: Web3) => {
    const contractAddress = '0x7643b8c2457c1f36dc6e3b8f8e112fdf6da7698a';
    const walletAddress = '0xd337163ef588f2ee7cdd30a3387660019be415c9';
    const chainId = 1;

// You can create and use a custom provider connector (for example: ethers)
    const connector = new Web3ProviderConnector(web3);

    const limitOrderBuilder = new LimitOrderBuilder(
        contractAddress,
        chainId,
        connector
    );

// ...

    const limitOrder = limitOrderBuilder.buildLimitOrder({
        makerAssetAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        takerAssetAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
        makerAddress: '0xfb3c7ebccccAA12B5A884d612393969Adddddddd',
        makerAmount: '100',
        takerAmount: '200',
        predicate: '0x0',
        permit: '0x0',
        interaction: '0x0',
    });
    const limitOrderTypedData = limitOrderBuilder.buildLimitOrderTypedData(
        limitOrder
    );
    const limitOrderSignature = limitOrderBuilder.buildOrderSignature(
        walletAddress,
        limitOrderTypedData
    );
    const limitOrderHash = limitOrderBuilder.buildLimitOrderHash(
        limitOrderTypedData
    );
}
