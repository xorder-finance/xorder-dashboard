import styled from "styled-components";
import * as React from "react";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../state/hooks";
import {backendAddress, fillOrder} from "../../../tools/1inch";
import {CurrencyField3} from "./currency-field";
import {tokens} from "../../../tools/tokens";
import {TitleSecondary} from "../../../common/text";
import {ordersListUpdated} from "../../../../state/reducers/orders-reducer";

const Container = styled.div`
  max-width: 700px;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CaptionContainer = styled.div`
  margin-bottom: 20px;
`


const CurrencyFields = styled.div`
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;

  align-items: stretch;
  justify-content: space-between;

  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 1%) 0 0 1px, rgb(0 0 0 / 4%) 0 4px 8px, rgb(0 0 0 / 4%) 0 16px 24px, rgb(0 0 0 / 1%) 0 24px 32px;
  border-radius: 24px;
  padding: 10px;
  box-sizing: border-box;

  margin-bottom: 10px;
`

const PaddedCurrencyField = styled(CurrencyField3)`
  flex: 1 1 200px;
  margin: 10px;
`

const Button = styled.button`
  text-align: center;

  margin: 10px;

  &:disabled {
    background: #696969;
  }

  &:hover {
    border: 1px solid white;
  }

  border: 1px solid #009777;


  color: white;
  background: #009777;
  transition-duration: 0.4s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  padding: 10px 16px;
  border-radius: 16px;
`

const orderExample = {
    limitOrder: {
        salt: '146753921826',
        makerAsset: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        takerAsset: '0xf3e0d7bf58c5d455d31ef1c2d5375904df525105',
        makerAssetData: '0x23b872dd000000000000000000000000de968842ba9ad7c9a6085e5a9ad1af7fede4753500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000de0b6b3a7640000',
        takerAssetData: '0x23b872dd0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000de968842ba9ad7c9a6085e5a9ad1af7fede475350000000000000000000000000000000000000000000000000de0b6b3a7640000',
        getMakerAmount: '0xf4a215c30000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000',
        getTakerAmount: '0x296637bf0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000',
        predicate: '0x0',
        permit: '0x0',
        interaction: '0xcbb4c35562c36706f881de6d286a78c17cad6c3ab9544608d2b53f4595423f0d'
    },
    limitOrderStruct: {
        makerAssetAddress: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        takerAssetAddress: '0xf3e0d7bf58c5d455d31ef1c2d5375904df525105',
        makerAddress: '0xdE968842ba9aD7c9A6085e5A9Ad1Af7fEDE47535',
        makerAmount: '1000000000000000000',
        takerAmount: '1000000000000000000',
        predicate: '0x0',
        permit: '0x0',
        interaction: '0xcbb4c35562c36706f881de6d286a78c17cad6c3ab9544608d2b53f4595423f0d'
    }
}

type Order = typeof orderExample

export const Step3: React.FC = () => {
    const web3State = useAppSelector(state => state.web3)
    const {needUpdate} = useAppSelector(state => state.orders)
    const dispatch = useAppDispatch()

    const [orders, setOrders] = useState([] as Order[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (needUpdate)
            (async () => {
                const result = await fetch(backendAddress + "/list")
                const body = await result.json()

                setOrders(body)
                // setOrders([orderExample])
            })()
        dispatch(ordersListUpdated())
    }, [needUpdate])

    return (
        <Container>
            {orders.length != 0 && <CaptionContainer>
                <TitleSecondary>
                    Open orders
                </TitleSecondary>
            </CaptionContainer>}
            {orders.map(order => {
                const selectedToken1 = tokens.find(token => token.addresses[web3State.netId] === order.limitOrderStruct.makerAssetAddress)
                const selectedToken2 = tokens.find(token => token.addresses[web3State.netId] === order.limitOrderStruct.takerAssetAddress)

                if (!selectedToken1 || !selectedToken2)
                    return null

                // @ts-ignore
                return <CurrencyFields key={order.limitOrderStruct.interaction}>
                    <PaddedCurrencyField
                        selectedToken={selectedToken1}
                        amount={web3State.web3.utils.fromWei(order.limitOrderStruct.makerAmount, selectedToken1.decimals)}/>
                    <PaddedCurrencyField
                        selectedToken={selectedToken2}
                        amount={web3State.web3.utils.fromWei(order.limitOrderStruct.takerAmount, selectedToken2.decimals)}/>
                    <Button disabled={loading} onClick={async () => {
                        setLoading(true)
                        try {
                            await fillOrder(web3State, order)
                        } catch (e) {
                            console.error(e)
                        }
                        setLoading(false)
                    }}>
                        Fill
                    </Button>
                </CurrencyFields>
            })}
        </Container>
    )
}
