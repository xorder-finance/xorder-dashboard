export type Token = {
    name: string,
    icon: string,
    decimals: number,
    addresses: {
        1: string,
        3: string,
        4: string,
        5: string,
        42: string
    }
}

export const tokens: Token[] = [
    {
        name: "WBTC",
        decimals: 18,
        icon: "img/wbtc.png",
        addresses: {
            1: "",
            3: "",
            4: "",
            5: "",
            42: "0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9"
        }
    },
    {
        name: "DAI",
        decimals: 18,
        icon: "img/dai.png",
        addresses: {
            1: "",
            3: "",
            4: "",
            5: "",
            42: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"
        }
    }
]

export const workingNetworkIds = tokens.reduce((acc, val) => {
    return Object.keys(val.addresses).filter(key => val.addresses[key] != "").filter(key => acc.includes(key))
}, Object.keys(tokens[0].addresses)).map(id => Number(id))