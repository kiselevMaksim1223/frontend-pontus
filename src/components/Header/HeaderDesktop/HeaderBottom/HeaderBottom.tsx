import React from 'react';
import {StyledContainer} from "../../../../styled-components/Container";
import {FlexStyled} from "../../../../styled-components/Flex";
import {Logo} from "../../../common/Logo/Logo";
import {Nav} from "./Nav/Nav";
import {StyledWrapper} from "../../../../styled-components/Wrapper";
import logoStand from "../../../../img/Logo/pontusLogo.png"

export const HeaderBottom = () => {
    return (
        <StyledWrapper padding={"1em 0.2em"}>
            <StyledContainer>
                <FlexStyled justify={"space-between"}>
                    <Logo src={logoStand} width={"150px"}/>
                    <Nav/>
                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};

