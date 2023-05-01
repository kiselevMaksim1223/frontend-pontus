import React, {FC} from 'react';
import {ContainerStyled} from "../../../../styled-components/Container";
import {Description} from "./HeaderDescription/Description";
import {WrapperStyled} from "../../../../styled-components/Wrapper";



export const HeaderTop:FC = () => {
    return (
        <WrapperStyled padding={"1em 0.2em"} backgroundColor={"#2A2E49"}>
            <ContainerStyled>
                    <Description/>
            </ContainerStyled>
        </WrapperStyled>
    );
};

