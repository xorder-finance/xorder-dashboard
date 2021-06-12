import styled from "styled-components";
import * as React from "react";
import {TitlePrimary} from "../common/text";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
`

export const Instruction: React.FC = () => {
    // const dispatch = useAppDispatch()
    return (
        <Container>
            <TitlePrimary>
                Make your money work until order is fullfilled
            </TitlePrimary>
        </Container>
    )
}
