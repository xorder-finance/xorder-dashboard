import styled from "styled-components";
import * as React from "react";
import {useState} from "react";
import {Token} from "../../../tools/tokens";


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


const TokenInLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const AccordionListItemIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  margin-right: 10px;
`


export const CurrencyField3: React.FC<{
    className?: string,
    selectedToken: Token,
    amount: string
}> = ({
          className,
          selectedToken,
          amount
      }) => {

    const [open, setOpen] = useState(false);

    return <>
        <SelectTokenButton className={className} onClick={() => {
            setOpen(!open)
        }}>
            {selectedToken.icon && <AccordionListItemIcon src={selectedToken.icon}/>}
            <TokenInLine>
                {amount}
            </TokenInLine>
        </SelectTokenButton>
    </>
}
