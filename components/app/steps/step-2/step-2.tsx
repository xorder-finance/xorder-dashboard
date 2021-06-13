import styled from "styled-components";
import * as React from "react";
import {useState} from "react";
import {TitleSecondary} from "../../../common/text";
import {useAppSelector} from "../../../../state/hooks";
import {submitOrder, fillOrder} from "../../../tools/1inch";

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

const AmountFields = styled.div`
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

const AmountField = styled.input`
  font-size: 16px;
  border: 2px solid #009777;
  outline: none;
  border-radius: 16px;
  padding: 10px;
`

const StyledAmountField = styled(AmountField)`
  flex: 1 1 200px;
  margin: 10px;
`

const PlaceOrderButton = styled.button`
  text-align: center;
  margin-top: 40px;
  width: 100%;

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
export const Step2: React.FC = () => {

    const tokenState = useAppSelector(state => state.tokens)
    const web3State = useAppSelector(state => state.web3)

    const [exchangeAmountString, setExchangeAmountString] = useState("");
    const [receiveAmountString, setReceiveAmountString] = useState("");

    const [buttonEnabled, setButtonEnabled] = useState(true);

    const {exchange, receive} = tokenState

    if (!exchange || !receive)
        return null

    return (
        <Container>
            <CaptionContainer>
                <TitleSecondary>
                    Amount of tokens
                </TitleSecondary>
            </CaptionContainer>
            <AmountFields>
                <StyledAmountField placeholder={`${exchange.name} amount`} value={exchangeAmountString}
                                   onChange={(e) => setExchangeAmountString(e.target.value)}/>
                <StyledAmountField placeholder={`${receive.name} amount`} value={receiveAmountString}
                                   onChange={(e) => setReceiveAmountString(e.target.value)}/>
            </AmountFields>
            <PlaceOrderButton disabled={!buttonEnabled} onClick={async () => {
                setButtonEnabled(false)
                try {
                    const web3 = web3State.web3
                    const exchangeAmount = web3.utils.toWei(exchangeAmountString)
                    const receiveAmount = web3.utils.toWei(receiveAmountString)

                    console.log("Test");

                    await fillOrder(web3State, 1000, 0, 0)
//                     await submitOrder(web3State, tokenState, exchangeAmount, receiveAmount)
                } catch (e) {
                    console.error(e)
                }
                setButtonEnabled(true)
            }}>
                Place order
            </PlaceOrderButton>
        </Container>
    )
}
