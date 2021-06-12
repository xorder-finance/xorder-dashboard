import styled from "styled-components";
import * as React from "react";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {initWeb3, networkName, Web3State} from "../../state/reducers/web3-reducer";
import {TitleSecondary} from "../common/text";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`

const LogoTag = styled.img`
  cursor: pointer;
`

const Logo = () => <LogoTag src="/img/logo.svg" alt="xOrder Logo" onClick={() => window.location.assign("/")}/>

const ReTextButtonXS = styled.button`
  &:hover {
    border: 1px solid white;
  }

  border: 1px solid #009777;


  color: white;
  background: #009777;
  transition-duration: 0.4s;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  padding: 10px 16px;

  box-sizing: border-box;
  border-radius: 16px;
`

const HeaderText = TitleSecondary

export const Header: React.FC = () => {
    const {web3State, web3Account, netId} = useAppSelector(state => state.web3)
    const dispatch = useAppDispatch()
    return (
        <Container>
            <div>

            </div>
            {web3State == Web3State.UNKNOWN && <ReTextButtonXS onClick={() => dispatch(initWeb3())}>
                Connect wallet
            </ReTextButtonXS>}
            {web3State == Web3State.CONNECTED && <HeaderText>
                {web3Account}, network: {networkName(netId)}
            </HeaderText>}
        </Container>
    )
}
