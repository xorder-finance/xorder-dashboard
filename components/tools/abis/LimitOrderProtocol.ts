import {AbiItem} from "web3-utils";

// @ts-ignore
export const limitOrderProtocolAbi = [
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
                "internalType": "uint256",
                "name": "newNonce",
                "type": "uint256"
            }
        ],
        "name": "NonceIncreased",
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
                "name": "remaining",
                "type": "uint256"
            }
        ],
        "name": "OrderFilled",
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
                "name": "makingAmount",
                "type": "uint256"
            }
        ],
        "name": "OrderFilledRFQ",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "LIMIT_ORDER_RFQ_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "LIMIT_ORDER_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "amount",
                "type": "uint8"
            }
        ],
        "name": "advanceNonce",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "and",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "arbitraryStaticCall",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
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
                "internalType": "struct LimitOrderProtocol.Order",
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
                "internalType": "uint256",
                "name": "orderInfo",
                "type": "uint256"
            }
        ],
        "name": "cancelOrderRFQ",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
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
                "internalType": "struct LimitOrderProtocol.Order",
                "name": "order",
                "type": "tuple"
            }
        ],
        "name": "checkPredicate",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract AggregatorV3Interface",
                "name": "oracle1",
                "type": "address"
            },
            {
                "internalType": "contract AggregatorV3Interface",
                "name": "oracle2",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "spread",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "doublePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "eq",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
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
                "internalType": "struct LimitOrderProtocol.Order",
                "name": "order",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
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
                "internalType": "uint256",
                "name": "thresholdAmount",
                "type": "uint256"
            }
        ],
        "name": "fillOrder",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "info",
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
                    }
                ],
                "internalType": "struct LimitOrderProtocol.OrderRFQ",
                "name": "order",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
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
            }
        ],
        "name": "fillOrderRFQ",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "contract IERC721",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "func_20xtkDI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "contract IERC721",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "func_40aVqeY",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "func_50BkM4K",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "contract IERC1155",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "func_733NCGU",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderMakerAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "orderTakerAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "swapTakerAmount",
                "type": "uint256"
            }
        ],
        "name": "getMakerAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderMakerAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "orderTakerAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "swapMakerAmount",
                "type": "uint256"
            }
        ],
        "name": "getTakerAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "gt",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "immutableOwner",
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
        "name": "increaseNonce",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "maker",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "slot",
                "type": "uint256"
            }
        ],
        "name": "invalidatorForOrderRFQ",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "lt",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "nonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "makerAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "makerNonce",
                "type": "uint256"
            }
        ],
        "name": "nonceEquals",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "or",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "remaining",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "orderHash",
                "type": "bytes32"
            }
        ],
        "name": "remainingRaw",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "orderHashes",
                "type": "bytes32[]"
            }
        ],
        "name": "remainingsRaw",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "results",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "simulateCalls",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract AggregatorV3Interface",
                "name": "oracle",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "inverseAndSpread",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "singlePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "timestampBelow",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as AbiItem[]