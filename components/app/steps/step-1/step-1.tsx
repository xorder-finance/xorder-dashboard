import styled from "styled-components";
import * as React from "react";
import {TitleSecondary} from "../../../common/text";
import {CurrencyField} from "./currency-field";
import {useAppDispatch, useAppSelector} from "../../../../state/hooks";
import {setExchangeToken, setReceiveToken} from "../../../../state/reducers/token-reducer";

const Container = styled.div`
  max-width: 700px;
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

  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 1%) 0 0 1px, rgb(0 0 0 / 4%) 0 4px 8px, rgb(0 0 0 / 4%) 0 16px 24px, rgb(0 0 0 / 1%) 0 24px 32px;
  border-radius: 24px;
  padding: 10px;
  box-sizing: border-box;
`

const PaddedCurrencyField = styled(CurrencyField)`
  flex: 1 1 200px;
  margin: 10px;
`


export const Step1: React.FC = () => {

    const {exchange, receive} = useAppSelector(state => state.tokens)
    const dispatch = useAppDispatch()

    return (
        <Container>
            <CaptionContainer>
                <TitleSecondary>
                    Tokens to exchange
                </TitleSecondary>
            </CaptionContainer>
            <CurrencyFields>
                <PaddedCurrencyField title={"Exchange"} selectedToken={exchange}
                                     onSelectToken={(token) => {
                                         // if (receive && receive.name == token.name)
                                         //     dispatch(setReceiveToken(undefined))
                                         dispatch(setExchangeToken(token))
                                     }}/>
                <PaddedCurrencyField title={"Receive"} selectedToken={receive} excludeToken={exchange}
                                     onSelectToken={(token) => dispatch(setReceiveToken(token))}/>
            </CurrencyFields>
        </Container>
    )
}
