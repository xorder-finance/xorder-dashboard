import {AbiItem} from "web3-utils";

// @ts-ignore
export const ppContractAbi = [
    {
        "inputs": [
            {
                "internalType": "contract ComptrollerInterface",
                "name": "_comptroller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_comp",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_limitOrderProtocol",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "OrderCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "maker",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "OrderCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "filled",
                "type": "bool"
            }
        ],
        "name": "OrderNotified",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "salt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "makerAsset",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "takerAsset",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "makerAssetData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "takerAssetData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "getMakerAmount",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "getTakerAmount",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "predicate",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "permit",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "interaction",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct LimitOrderProtocol.LOPOrder",
                "name": "order",
                "type": "tuple"
            }
        ],
        "name": "cancelOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "createOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "isValidSignature",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "makeMoney",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "makerAsset",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "takerAsset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "makingAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "takingAmount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "interactiveData",
                "type": "bytes"
            }
        ],
        "name": "notifyFillOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tokens",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as AbiItem[]