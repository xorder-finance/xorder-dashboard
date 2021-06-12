import styled from "styled-components";
import {Header} from "../components/header/header";
import {Step1} from "../components/app/steps/step-1/step-1";
import {Instruction} from "../components/instruction/instruction";
import {Step2} from "../components/app/steps/step-2/step-2";
import {useAppDispatch, useAppSelector} from "../state/hooks";
import {initWeb3, networkName, Web3State} from "../state/reducers/web3-reducer";
import * as React from "react";
import {TitleSecondary} from "../components/common/text";

const Container = styled.div`
  min-width: 200px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`


const ConnectMetamaskContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ConnectMetamaskText = styled(TitleSecondary)``

const ConnectMetamaskButton = styled.button`
  text-align: center;
  margin-top: 40px;

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

export default function App() {
    const {web3State, netId} = useAppSelector(state => state.web3)
    const {exchange, receive} = useAppSelector(state => state.tokens)
    const dispatcher = useAppDispatch()


    const metamaskError = (error: string, button: boolean = false) => <ConnectMetamaskContainer>
        <div>
            <ConnectMetamaskText>
                {error}
            </ConnectMetamaskText>
        </div>
        {button && <div>
            <ConnectMetamaskButton onClick={() => dispatcher(initWeb3())}>
                Connect
            </ConnectMetamaskButton>
        </div>}
    </ConnectMetamaskContainer>

    const error = (() => {
        switch (web3State) {
            case Web3State.UNKNOWN:
                return metamaskError("Please connect Metamask to proceed", true)
            case Web3State.LOADING:
                return metamaskError("Please connect Metamask to proceed")
            case Web3State.CONNECTING:
                return metamaskError("Please connect Metamask to proceed")
            case Web3State.BAD_NETWORK:
                return metamaskError(`Metamask is connected to unknown network: ${networkName(netId)}. Please select Kovan`)
            case Web3State.LOCKED:
                return metamaskError("Please unlock Metamask to proceed")
            case Web3State.NO_METAMASK:
                return metamaskError("Please install Metamask to proceed")
            case Web3State.REQUESTED:
                return metamaskError("Please connect Metamask to proceed")
            case Web3State.CONNECTED:
                return null
        }
    })()

    const showError = (exchange && receive)

    return (
        <Container>
            <Header/>
            <Instruction/>
            <Step1/>
            {error ? (showError && error) : <>
                <Step2/>
            </>}
        </Container>
    )
}
