import React from 'react';
import {ContainerStyled} from "../../../../styled-components/Container";
import {FlexStyled} from "../../../../styled-components/Flex";
import {Logo} from "../../../common/Logo/Logo";
import {Nav} from "./Nav/Nav";
import {WrapperStyled} from "../../../../styled-components/Wrapper";
import logoStand from "../../../../data/img/Logo/pontusLogo.png"

export const HeaderBottom = () => {
    return (
        <WrapperStyled padding={"1em 0.2em"}>
            <ContainerStyled>
                <FlexStyled justify={"space-between"}>
                    <Logo src={logoStand} width={"150px"}/>
                    <Nav/>
                </FlexStyled>
            </ContainerStyled>
        </WrapperStyled>
    );
};

