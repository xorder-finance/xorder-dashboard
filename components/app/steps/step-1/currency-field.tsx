import styled, {css} from "styled-components";
import * as React from "react";
import {useState} from "react";
import {Token, tokens} from "../../../tools/tokens";


const SelectTokenButton = styled.div`
  color: white;
  background: #009777;
  padding: 10px 16px;

  height: 44px;

  box-sizing: border-box;
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
  cursor: pointer;

  transition-duration: 0.4s;
`


const TrianguloSvg = styled.svg<{ rotated: boolean }>`
  transition-duration: 0.4s;
  transform-origin: center;
  ${({rotated}) => rotated && css`transform: rotate(180deg);`}
`
const Triangulo: React.FC<{ rotated: boolean }> = ({rotated}) => <TrianguloSvg rotated={rotated} width={12} height={7}>
    <path d={"M0.97168 1L6.20532 6L11.439 1"} stroke={"#ffffff"} strokeWidth={1.5} fill={"#00000000"}/>
</TrianguloSvg>

const Accordion = styled.div<{ open: boolean }>`
  width: 100%;
  position: absolute;
  top: 35px;
  left: 0;

  transition-duration: 0.4s;

  ${({open}) => {
    if (!open)
      return css`
        opacity: 0;
        visibility: hidden;
        //display: none;
        //overflow: hidden;
      `;
  }}
`

const AccordionList = styled.div`
  width: 100%;
  background: white;
  padding: 4px;

  box-sizing: border-box;
  border-radius: 16px;
`


const AccordionListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  margin: 4px;

  box-sizing: border-box;
  border-radius: 16px;
  background: #f9f9f9;

  cursor: pointer;
`

const AccordionListItemText = styled.div`
  color: black;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 13px;
  text-align: center;
`

const AccordionListItemIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  margin-left: 10px;
`

const TokenInLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`


export const CurrencyField: React.FC<{
    className?: string,
    title: string,
    selectedToken?: Token,
    excludeToken?: Token,
    onSelectToken: (token: Token) => any
}> = ({
          className,
          title,
          selectedToken,
          excludeToken,
          onSelectToken
      }) => {

    const [open, setOpen] = useState(false);

    return <>
        <SelectTokenButton className={className} onClick={() => {
            setOpen(!open)
        }}>
            <div>
                {selectedToken ? <TokenInLine>
                    {selectedToken.name}
                    <AccordionListItemIcon src={selectedToken.icon}/>
                </TokenInLine> : title}
            </div>
            <Triangulo rotated={open}/>
            <Accordion open={open}>
                <AccordionList>
                    {tokens.map(token => {
                        if (excludeToken && token.name == excludeToken.name)
                            return null
                        return <AccordionListItem key={token.name} onClick={() => onSelectToken(token)}>
                            <AccordionListItemText>
                                {token.name}
                            </AccordionListItemText>
                            <AccordionListItemIcon src={token.icon}/>
                        </AccordionListItem>
                    })}
                </AccordionList>
            </Accordion>
        </SelectTokenButton>
    </>
}
